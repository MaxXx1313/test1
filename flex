<!DOCTYPE html>
<html >
<head >
	<meta charset="utf-8">
	<title>Flex</title>

	<style>


		html,body{
			height: 100%;
			width: 100%;
		}
		
		.mainconteiner{
			height: 150%;
			width: 100%;
			display: flex;
			flex-flow: row wrap;
			align-content: flex-start;
			align-items: flex-start;
			background: #a89;
			justify-content: space-evenly;

		}

		.maincontent__item{
			background: #c745;
			border-style: solid; 
			border-width: 1px 1px 1px 1px;
			box-sizing: border-box;
			margin: 2% 0% 2% 0%;
			}

		.maincontent__item__table{
			background: #c747;
			border-style: solid; 
			border-width: 1px 1px 1px 1px;
			box-sizing: border-box;
			min-height: 40%;
			min-width:90%;
			margin: 0% 5% 0% 5%;

		}

		.maincontent__item__table__cell{
			background: #c749;
			border-style: solid; 
			border-width: 1px 1px 1px 1px;
			box-sizing: border-box;
			min-height: 40%;
			min-width:25%;			
		}
		.maincontent__item__table__cell--longcell{
			background: #c746;
			border-style: solid; 
			border-width: 1px 1px 1px 1px;
			box-sizing: border-box;
			min-width:80%;				
		}

		.maincontent__item__table__cell--fullwidth{
			align-self: flex-end;
			background: #c748;
			border-style: solid; 
			border-width: 1px 1px 1px 1px;
			box-sizing: border-box;
			min-width:100%;	

		}


		.fixed{
			background: yellow;
			z-index: 1;
			position: fixed;
			border-style: solid; 
    		border-width: 1px 1px 1px 1px;

		}
		.fixed_top{
			right: 0%; 
    		top: 0%;
            width:60%;
            height: 5%;

		}

		.fixed_bottom{
			left:  0%; 
    		top: 86%;
            width:100%;
            height: 14%
		}

		.topdiv{
			margin-top: 0%;
			flex: 0 1 100%;
			min-height: 20%;
		}

		.d1{
			flex:0 1 20%;
			min-height: 60%



		}

		.d2{
			flex:0 1 40%;
			min-height: 50%;
			display: flex;
			flex-flow: column wrap;
			align-content: flex-start;
			align-items: flex-start;	
			justify-content: space-evenly;
		}

		.d3{
			flex:0 1 18%;
			min-height: 55%;
		}

		.d21{
			flex:0.4 1 100%;
			display: flex;
			flex-flow: row wrap;
			align-items: center;	
			justify-content: space-evenly;

		}

		.d22{
			flex:0.45 1 100%;
			display: flex;
			flex-flow: row wrap;
			align-items: center;	
			justify-content: space-evenly;

		}

		.d211{}
		.d212{}
		.d213{}
		.d214{
			height: 30%;
		}

		.d221{}
		.d222{}
		.d223{}
		.d224{
			height: 25%;
		}
		.d225{
			height: 25%;
		}



        </style>
    </head>
    <body >
    	<div class="fixed fixed_top"></div>
        <div class="fixed fixed_bottom"></div>
        <div class="mainconteiner">
        	<div class="maincontent__item topdiv"></div>
        	<div class="maincontent__item d1"></div>
       		<div class="maincontent__item d2">
        		<div class="maincontent__item__table d21">
        			<div class="maincontent__item__table__cell d211">
        			</div>
	        		<div class="maincontent__item__table__cell d212">
	        		</div>
	        		<div class="maincontent__item__table__cell d213">
	        		</div>
	        		<div class="maincontent__item__table__cell--longcell d214">
	        		</div>
	        	</div>
	        	<div class="maincontent__item__table d22">
	        		<div class="maincontent__item__table__cell d221">
	        		</div>
	        		<div class="maincontent__item__table__cell d222">
	        		</div>
	        		<div class="maincontent__item__table__cell d223">
	        		</div>
	        		<div class="maincontent__item__table__cell--longcell d224">
	        		</div>
	        		<div class="maincontent__item__table__cell--fullwidth d225">
	        		</div>
	        	</div>
       		</div>
       		<div class="maincontent__item d3"></div>
        </div>
	</style>
</head>
<body>

	
</body>
</html>