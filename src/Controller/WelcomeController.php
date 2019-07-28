<?php


namespace App\Controller;
use App\Repository\AboutUsSectionRepository;
use App\Repository\ReservationSectionRepository;
use App\Repository\VehicleCategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class WelcomeController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function Show(ReservationSectionRepository $reservationSectionRepository, AboutUsSectionRepository $aboutUsSectionRepository, VehicleCategoryRepository $vehicleCategoryRepository)
    {
        $reservationSectionLogo = $reservationSectionRepository->findOneBy(['title' => 'logo' ]);
        $reservationSectionSearchBtn = $reservationSectionRepository->findOneBy(['title' => 'search-button-color' ]);
        $reservationSectionFeaturedCar = $reservationSectionRepository->findOneBy(['title' => 'featured-car' ]);
        $aboutUsContent = $aboutUsSectionRepository->findOneBy(['title'=>'about-us']);
        $aboutFeaturedCar = $aboutUsSectionRepository->findOneBy(['title'=>'about-us-featured-car']);
        $vehicles = $vehicleCategoryRepository->findAll();

        return $this->render('home/show.html.twig',[
            'reservationSectionLogo'=> $reservationSectionLogo,
            'reservationSectionSearchBtn'=> $reservationSectionSearchBtn,
            'reservationSectionFeaturedCar'=> $reservationSectionFeaturedCar,
            'aboutUsContent'=> $aboutUsContent,
            'aboutFeaturedCar'=> $aboutFeaturedCar,
            'vehicleCategory' => $vehicles,
        ]);
    }

}