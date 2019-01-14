<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use JMS\Serializer\Serializer;
use JMS\Serializer\SerializerBuilder;
use JMS\Serializer\SerializationContext;

class BaseController extends Controller
{

    const AJAX_STATUS_SUCCESS = true;
    const AJAX_STATUS_ERROR = false;

    protected function em()
    {
        return $this->getDoctrine()->getManager();
    }

    protected function persist($entity)
    {
        // "The EntityManager is closed." issue.
        if (!$this->em()->isOpen()) {
            $this->getDoctrine()->resetManager();
        }

        $this->em()->persist($entity);
        $this->em()->flush();

    }

    protected function remove($entity)
    {
        // "The EntityManager is closed." issue.
        if (!$this->em()->isOpen()) {
            $this->getDoctrine()->resetManager();
        }

        $this->em()->remove($entity);
        $this->em()->flush();
    }

    protected function getSerialize($object, $groupName)
    {
        $serializer = $this->container->get('jms_serializer');

        $objects = $serializer->serialize(
            $object,
            'json',
            SerializationContext::create()->setSerializeNull(true)->setGroups([$groupName])
        );

        return $objects;
    }

    protected function getSerializeDecode($object, $groupName)
    {
        $serializer = $this->container->get('jms_serializer');

        $objects = $serializer->serialize(
            $object,
            'json',
            SerializationContext::create()->setSerializeNull(true)->setGroups([$groupName])
        );

        return json_decode($objects, true);
    }

    protected function redirectUrl($url, $day = 1)
    {
        $url = $this->generateUrl($url);
        $redirect = new RedirectResponse($url);
        $redirect->setExpires(new \DateTime('+'.$day.' day'));
        return $redirect;
    }

    protected function flashSuccess($message)
    {
        $this->addFlash('success', $message);
    }

    protected function flashWarning($message)
    {
        $this->addFlash('warning', $message);
    }

    protected function flashError($message)
    {
        $this->addFlash('error', $message);
    }

    protected function notFound($message = 'Not Found', \Exception $previous = null)
    {
        throw $this->createNotFoundException($message, $previous);
    }

    protected function isXmlHttpRequest()
    {
        $request = $this->container->get('request_stack')->getCurrentRequest();
        return $request->isXmlHttpRequest() || $request->get('_xml_http_request');
    }

    protected function validateTemplate($name)
    {
        if($this->get('templating')->exists($name)){
            return $name;
        }

        return self::TEMPLATE_ERROR;
    }

}