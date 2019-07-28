<?php

namespace App\Repository;

use App\Entity\ReservationSection;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ReservationSection|null find($id, $lockMode = null, $lockVersion = null)
 * @method ReservationSection|null findOneBy(array $criteria, array $orderBy = null)
 * @method ReservationSection[]    findAll()
 * @method ReservationSection[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReservationSectionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ReservationSection::class);
    }

    // /**
    //  * @return ReservationSection[] Returns an array of ReservationSection objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ReservationSection
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
