<?php


namespace App\Controller;


use App\Entity\VehicleCategory;
use App\Repository\AboutUsSectionRepository;
use App\Repository\ReservationSectionRepository;
use App\Repository\VehicleCategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Gedmo\Sluggable\Util\Urlizer;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PageManagerController
 * @package App\Controller
 * @IsGranted("ROLE_ADMIN")
 */
class PageManagerController extends AbstractController
{

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/admin/homepage-manager", name="homepage_manager")
     */
    public function HomepageManager(ReservationSectionRepository $reservationSectionRepository,AboutUsSectionRepository $aboutUsSectionRepository)
    {
        $reservationSectionLogo = $reservationSectionRepository->findOneBy(['title' => 'logo' ]);
        $reservationSectionSearchBtn = $reservationSectionRepository->findOneBy(['title' => 'search-button-color' ]);
        $reservationSectionFeaturedCar = $reservationSectionRepository->findOneBy(['title' => 'featured-car' ]);
        $aboutFeaturedCar = $aboutUsSectionRepository->findOneBy(['title'=>'about-us-featured-car']);
        return $this->render('page_manager/list.html.twig',[
            'reservationSectionLogo'=> $reservationSectionLogo,
            'reservationSectionSearchBtn'=> $reservationSectionSearchBtn,
            'reservationSectionFeaturedCar'=> $reservationSectionFeaturedCar,
            'aboutFeaturedCar'=> $aboutFeaturedCar,
        ]);
    }

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/admin/reservation-section", name="reservation_section")
     */
    public function ReservationSection(ReservationSectionRepository $reservationSectionRepository)
    {
        $reservationSectionLogo = $reservationSectionRepository->findOneBy(['title' => 'logo' ]);
        $reservationSectionSearchBtn = $reservationSectionRepository->findOneBy(['title' => 'search-button-color' ]);
        $reservationSectionFeaturedCar = $reservationSectionRepository->findOneBy(['title' => 'featured-car' ]);
        return $this->render('page_manager/reservation-section.html.twig',[
            'reservationSectionLogo'=> $reservationSectionLogo,
            'reservationSectionSearchBtn'=> $reservationSectionSearchBtn,
            'reservationSectionFeaturedCar'=> $reservationSectionFeaturedCar,
        ]);
    }

    /**
     * @Route("/admin/uploads/reservation", name="upload_reservation")
     */
    public function ReservationUpload(Request $request, ReservationSectionRepository $reservationSectionRepository, EntityManagerInterface $em)
    {
        $destination = $this->getParameter('kernel.project_dir').'/public_html/img';

        if ($uploadedFile = $request->files->get('logo')){
            /** @var UploadedFile $uploadedFile */
            $reservationSectionLogo = $reservationSectionRepository->findOneBy(['title' => 'logo' ]);

            $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = Urlizer::urlize($originalFilename).'-'.uniqid().'.'.$uploadedFile->guessExtension();
            $uploadedFile->move(
                $destination,
                $newFilename
            );
            $reservationSectionLogo->setContent($newFilename);
            $em->persist($reservationSectionLogo);
        }

        if ($uploadedFile = $request->files->get('featured-car')){
            /** @var UploadedFile $uploadedFile */
            $reservationSectionFeaturedCar = $reservationSectionRepository->findOneBy(['title' => 'featured-car' ]);
            $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = Urlizer::urlize($originalFilename).'-'.uniqid().'.'.$uploadedFile->guessExtension();
            $uploadedFile->move(
                $destination,
                $newFilename
            );
            $reservationSectionFeaturedCar->setContent($newFilename);
            $em->persist($reservationSectionFeaturedCar);
        }
        if ($sectionButton = $request->get('sectionButton')){
            $reservationSectionSearchBtn = $reservationSectionRepository->findOneBy(['title' => 'search-button-color' ]);
            $reservationSectionSearchBtn->setContent($sectionButton);
            $em->persist($reservationSectionSearchBtn);
        }


        $em->flush();

        return $this->redirectToRoute('homepage_manager');
    }

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/admin/about-us-section", name="about_us_section")
     */
    public function AboutUsSection(AboutUsSectionRepository $aboutUsSectionRepository,ReservationSectionRepository $reservationSectionRepository)
    {
        $reservationSectionLogo = $reservationSectionRepository->findOneBy(['title' => 'logo' ]);
        $aboutUsContent = $aboutUsSectionRepository->findOneBy(['title'=>'about-us']);
        $aboutFeaturedCar = $aboutUsSectionRepository->findOneBy(['title'=>'about-us-featured-car']);
        return $this->render('page_manager/about-us-section.html.twig',[
            'aboutUsContent'=> $aboutUsContent,
            'aboutFeaturedCar'=> $aboutFeaturedCar,
            'reservationSectionLogo'=> $reservationSectionLogo,
        ]);
    }

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("admin/uploads/about-us", name="upload_about_us")
     */
    public function AboutUsUpload(Request $request, AboutUsSectionRepository $aboutUsSectionRepository, EntityManagerInterface $em)
    {
        $destination = $this->getParameter('kernel.project_dir').'/public_html/img';
        if ($uploadedFile = $request->files->get('featuredCar')){
            /** @var UploadedFile $uploadedFile */
            $aboutUsFeaturedCar = $aboutUsSectionRepository->findOneBy(['title' => 'about-us-featured-car' ]);

            $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = Urlizer::urlize($originalFilename).'-'.uniqid().'.'.$uploadedFile->guessExtension();
            $uploadedFile->move(
                $destination,
                $newFilename
            );
            $aboutUsFeaturedCar->setContent($newFilename);
            $em->persist($aboutUsFeaturedCar);
        }

        if ($sectionButton = $request->get('aboutContent')){
            $aboutUsContent = $aboutUsSectionRepository->findOneBy(['title' => 'about-us' ]);
            $aboutUsContent->setContent($sectionButton);
            $em->persist($aboutUsContent);
        }

        $em->flush();

        return $this->redirectToRoute('homepage_manager');

    }

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/admin/vehicle-categories-section", name="vehicle_categories_section")
     */
    public function VehicleCategoriesSection(VehicleCategoryRepository $vehicleCategoryRepository, ReservationSectionRepository $reservationSectionRepository)
    {
        $vehicles = $vehicleCategoryRepository->findAll();
        $reservationSectionLogo = $reservationSectionRepository->findOneBy(['title' => 'logo' ]);
        return $this->render('page_manager/vehicle-category-section.html.twig',[
            'vehicleCategory' => $vehicles,
            'reservationSectionLogo'=> $reservationSectionLogo,
        ]);
    }

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("admin/uploads/vehicle-category", name="upload_vehicle_category")
     */
    public function VehicleCategoriesUpload(Request $request, EntityManagerInterface $em)
    {
        $destination = $this->getParameter('kernel.project_dir').'/public_html/img';
        if (($uploadedFile = $request->files->get('file'))&&($title = $request->get('title'))&&($description = $request->get('description'))){
            $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = Urlizer::urlize($originalFilename).'-'.uniqid().'.'.$uploadedFile->guessExtension();
            $uploadedFile->move(
                $destination,
                $newFilename
            );

            /** @var UploadedFile $uploadedFile */
            $vehicleCategory = new VehicleCategory();
            $vehicleCategory->setTitle($title);
            $vehicleCategory->setContent($newFilename);
            $vehicleCategory->setDescription($description);

            $em->persist($vehicleCategory);
        }
        $em->flush();
        return $this->redirectToRoute('homepage_manager');

    }

}