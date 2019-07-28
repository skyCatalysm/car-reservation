<?php

namespace App\Repository;

use App\Entity\AboutUsSection;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method AboutUsSection|null find($id, $lockMode = null, $lockVersion = null)
 * @method AboutUsSection|null findOneBy(array $criteria, array $orderBy = null)
 * @method AboutUsSection[]    findAll()
 * @method AboutUsSection[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AboutUsSectionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, AboutUsSection::class);
    }

    // /**
    //  * @return AboutUsSection[] Returns an array of AboutUsSection objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AboutUsSection
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
