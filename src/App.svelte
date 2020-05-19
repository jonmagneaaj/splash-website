<script>
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'

 	let spillvalg = 'img/game1.png'
 	let spillregler = 'img/game2.png'
 	let playstore = 'img/playstore.png'
 	let appstore = 'img/appstore.png'



</script>
<!--footer-->
<Header />
<!--Main content-->
<main>
	<!--Overview of games-->
	<section class='showcase'>
		<div class='showcase-item text'>
			<h2 class='red center'>Flere spill for enhver smak!</h2>
			<p class='grey'>Med et bredt utvalg av spill, som passer for både store og små grupper så vil det alltid være noe for enhver! Prøv alt fra "Drikketuren", en lek der dere kan teste deres fordommer mot hverandre, eller bare bli bedre kjent! "Jeg har aldri" er den klassike drikkeleken der deltagerene blir bedre kjent med hverandre, og hva de har gjort! "Splash-fest" er en unik lek som byr på mange forskjellige utfordringer, oppgaver og spørsmål. Her blir en både bedre kjent med hverandre, men en vet aldri helt hva neste spørsmål på skjermen kan inneholde!</p>
		</div>
		<div class='showcase-item picture'>
			<img src={spillvalg} alt="Bilde av spillvalg på applikasjonen" />
		</div>
	</section>
	<!--Overview of a game-->
	<section class='showcase'>
		<div class='showcase-item picture'>
			<img src={spillregler} alt="Bilde av regler i et spill" />
		</div>
		<div class='showcase-item text'>
			<h2 class='red center'>Flere spill for enhver smak!</h2>
			<p class='grey'>Hvert eneste spill har hundrevis av forkjellige regler og oppgaver! Dette er og tilfeldig sortert hver gang, slik at hvert eneste spill blir helt unikt! Samtidig så er de spillene som tar ibrukk spillerenes navn sortert tilfeldig, men retferdig slik at alle får et forsøk!</p>
		</div>
	</section>
	<!--Download pages-->
	<div class='center'>
		<h2 class='red'> Last ned nå!</h2>
	</div>
	<section>
		<div class='showcase-item picture'>
			<img src={appstore} href='' alt='last ned på iphone' />
		</div>
		<div class='showcase-item picture'>
			<img src={playstore} href='' alt='last ned på android' />
		</div>
	</section>
	
</main>
<!--footer-->
<Footer/>

<style>
	main {
		min-height: 100%;
		margin: 4rem;

		display: grid;
		grid-auto-flow: row;
		justify-content: center;
		align-content: center;
		gap: 2rem;

		background-color: white;
	}

	img{
		width: 100%;
	}

	.showcase{
		display: grid;
		gap: 2rem;
		justify-items: center;
		justify-content: center;

		width: 100%;
	}
	.showcase-item{
		width: 100%;
		margin: 0 auto;
	}

	.picture{
		max-width: 20rem;
	}

	.center{
		margin: 0 auto;
	}

	.text{
		max-width: 40rem;
	}

	@media only screen and (min-width: 64rem) {
		main {
			width: 60%;
		}

		.showcase{
			display: grid;
			grid-template-columns: 50% 50%;
			gap: 2rem;
			width: 70%;
		}
		.text{
			max-width: 100%;
		}
	}
	@media only screen and (min-width: 110rem) {
		main {
			
			width: 50rem;

		}
	}
</style>