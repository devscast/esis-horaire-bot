<?php

declare(strict_types=1);

namespace App\Service\Subscription;

use App\Entity\Subscription;
use App\Repository\SubscriptionRepository;
use App\Service\Subscription\Exception\AlreadyHaveActiveSubscriptionException;
use App\Service\Subscription\Exception\NonActiveSubscriptionFoundException;
use App\Service\Timetable\Exception\EmptyPromotionException;
use App\Service\Timetable\Exception\InvalidPromotionException;
use App\Service\Timetable\PromotionService;
use Doctrine\ORM\EntityManagerInterface;
use TelegramBot\Api\Types\Message;

/**
 * Class SubscriptionService
 * @package App\Service
 * @author bernard-ng <ngandubernard@gmail.com>
 */
class SubscriptionService
{
    private EntityManagerInterface $em;
    private SubscriptionRepository $repository;

    /**
     * SubscriptionService constructor.
     * @param EntityManagerInterface $em
     * @param SubscriptionRepository $repository
     * @author bernard-ng <ngandubernard@gmail.com>
     */
    public function __construct(EntityManagerInterface $em, SubscriptionRepository $repository)
    {
        $this->em = $em;
        $this->repository = $repository;
    }

    /**
     * Create a subscription for push notification,
     * or Reactive existing one
     * @param Message $message
     * @param string $promotion
     * @throws AlreadyHaveActiveSubscriptionException
     * @throws EmptyPromotionException
     * @throws InvalidPromotionException
     * @author bernard-ng <ngandubernard@gmail.com>
     */
    public function subscribe(Message $message, string $promotion): void
    {
        $promotion = PromotionService::toPromotionCode($promotion);
        $subscribed = $this->repository->findOneBy(['chatId' => $message->getChat()->getId()]);
        if ($subscribed) {
            if ($subscribed->isActive() === false) {
                $subscribed->setIsActive(true);
                $this->em->persist($subscribed);
            } else {
                throw new AlreadyHaveActiveSubscriptionException();
            }
        } else {
            $subscription = Subscription::fromMessageCommand($message, $promotion);
            $this->em->persist($subscription);
        }
        $this->em->flush();
    }

    /**
     * Unsubscribe from notification push
     * @param Message $message
     * @throws NonActiveSubscriptionFoundException
     * @author bernard-ng <ngandubernard@gmail.com>
     */
    public function unsubscribe(Message $message): void
    {
        $subscribed = $this->repository->findOneBy([
            'chat_id' => $message->getChat()->getId(),
            'is_active' => true
        ]);

        if ($subscribed) {
            $subscribed->setIsActive(false);
            $this->em->persist($subscribed);
            $this->em->flush();
        } else {
            throw new NonActiveSubscriptionFoundException();
        }
    }
}
