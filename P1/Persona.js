/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Alberto",
				Photo: "man.png",
				Quote: "El que tenga miedo a morir que no nazca",
				Age: 20,
				Occupation: "Estudiante de ADE",
				Family: "Con pareja desde hace 1 año",
				Location: "Granada (Chana)",
				Character: "Le encanta pasar tiempo con sus seres queridos",
				PersonalityTraits: [
					{ Name: "Extrovertido y activo ", Value: 4 },
					{ Name: "Intuitivo e imaginativo", Value: 1 },
					{ Name: "Emocional e impulsivo", Value: 3 },
					{ Name: "Colérico y visceral", Value: 5 }
				], 
				Goals: ["Disfrutar y salir de fiesta", "Aprobar todas las asignaturas de la carrera"],
				Frustrations: ["Es una persona demasiado impulsiva y que se busca problemas con mucha facilidad"],
				Bio: "Es natural de  Granada y lleva toda su vida aquí, está en la universidad porque le gusta la idea de ser abogado defensor pero antes de eso quiere disfrutar de su juventud",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Webs de apuestas deportivas", Value: 2 }
					
				], 
                Contextos: "LLeva un tiempo agobiado con los exámenes de la universidad y quiere desconectar Le gustaría encontrar un sitio para ir con su pareja o amigos para desestresarse",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 1 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Monica Suarez",
				Photo: "woman.png",
				Quote: "El tiempo es oro",
				Age: 26,
				Occupation: "Trabajando en una discoteca mientras busca trabajo de lo suyo",
				Family: "Sus padres y sus amigos son lo más importante",
				Location: "Natural de Cádiz",
				Character: "Chica tímida pero inteligente",
				PersonalityTraits: [
					{ Name: "Introvertida y reservada ", Value: 3 },
					{ Name: "Intuitiva e imaginativa", Value: 3 },
					{ Name: "Racional y analitica", Value: 2 },
					{ Name: "Flemática y apática", Value: 2 }
				], 
				Goals: ["Le gustaría encontrar un trabajo estable para pensar en un futuro en formar una familia"],
				Frustrations: ["No consigue sentirse cómoda en ningún puesto de trabajo, no consigue desarrollarse como profesional de su ámbito"],
				Bio: "Natural de Cádiz, vino a Granada a estudiar BBAA y se quedó a vivir después de la carrera maravillada con la ciudad. Ahora busca un trabajo dónde pueda desarrollar todo lo aprendido",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Vlogs de arte", Value: 5 }
					
				], 
                Contextos:   "Necesita algún sitio dónde encontrar inspiración y conocer a gente con sus mismas inquietudes y gustos." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])