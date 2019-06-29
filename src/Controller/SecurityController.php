<?php


namespace App\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SecurityController extends AbstractController
{

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/security/login")
     */
    public function Login()
    {

        return $this->render('security/login .html.twig', []);
    }

}