<?php

namespace App\DataFixtures;

use App\Entity\ReservationSection;
use Doctrine\Common\Persistence\ObjectManager;

class ReservationSectionFixtures extends BaseFixture
{
    private static $title = [
        'logo',
        'search-button-color',
        'featured-car',
    ];
    private static $content = [
        'logo.png',
        'bg-warning',
        'featured-car.png',
    ];
    private static $description = [
        'But, instead of creating that random data by hand, there\'s a much cooler way',
        'But, instead of creating that random data by hand, there\'s a much cooler way',
        'But, instead of creating that random data by hand, there\'s a much cooler way',

    ];

    protected function loadData(ObjectManager $manager)
    {
        $this->createMany(ReservationSection::class,3,function (ReservationSection $reservationSection, $count){
            $reservationSection->setTitle(self::$title[$count]);
            $reservationSection->setContent(self::$content[$count]);
            $reservationSection->setDescription(self::$description[$count]);
        });
        $manager->flush();
    }
}
