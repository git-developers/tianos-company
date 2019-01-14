<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends BaseController {
	
	public function indexAction(Request $request): Response
    {
	    return $this->render(
		    'AppBundle:Default:index.html.twig',
		    [
			    'crud' => null,
		    ]
	    );
    }


}
