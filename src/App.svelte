<script>
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'
	import Report from './components/Report.svelte'
	import Review from './components/Review.svelte'

	//Database
	import {db} from './firebase.js'

	//Authentication
	import {auth, googleProvider} from './firebase.js'
	import {authState} from 'rxfire/auth'

	//Databases
	const reports = db.collection('reports')
	const reviews = db.collection('reviews')

	// User
	let user

	const unsubscribe = authState(auth).subscribe(u => user = u)

	const login = async () =>{
		await auth.signInWithPopup(googleProvider)

		const brukerListe = db.collection('brukerListe')
			brukerListe.doc(user.uid).set({
				displayName: user.displayName,
				photoURL: user.photoURL
			})
	}

	const logout = () =>{
		auth.signOut()
	}

	//gets reports in array
	let reps = []
	
	reports.orderBy('created')
        .onSnapshot(snap => {
        reps = snap.docs
	})
	
	//Gets reviews in array
	let rews = []

	reviews.orderBy('created')
        .onSnapshot(snap => {
        rews = snap.docs
    })

	//Images 
 	let spillvalg = 'img/game1.png'
 	let spillregler = 'img/game2.png'
 	let playstore = 'img/playstore.png'
 	let appstore = 'img/appstore.png'



</script>
<!--Header-->
<Header />
<!--Main content-->
<main>
	{#if user}
		<section class='login-left'>
			<img class='user-img center' src={user.photoURL} alt='avatar'>
			<button class='logout underline' on:click={logout}>Logout</button>
		</section>
	{:else}
		<section class='login-left'>
			<button class='login underline' on:click={login}>Login</button>
		</section>
	{/if}
	{#if user}
		<!--Reviews-->
		<h1 class='underline'>Reviews</h1>
		<section class='data'>
			{#each rews as rew}
				<Review id={rew.id} rewdata={rew.data()} />
			{:else}
				<div>Loading...</div>
			{/each}
		</section>
		<!--Reports-->
		<h1 class='underline'>Reports</h1>
		<section class='data'>
			{#each reps as rep}
				<Report id={rep.id} repdata={rep.data()} />
			{:else}
				<div>Loading...</div>
			{/each}
		</section>
	{/if}
	<!--Overview of games-->
	<section class='showcase'>
		<div class='showcase-item text'>
			<h2 class='red center'>Flere spill for enhver smak!</h2>
			<p class='grey'>Med et bredt utvalg av spill, som passer for både store og små grupper så vil det alltid være noe for enhver! Prøv alt fra "Drikketuren", en lek der dere kan teste deres fordommer mot hverandre, eller bare bli bedre kjent! "Jeg har aldri" er den klassiske drikkeleken der deltakerne blir bedre kjent med hverandre, og hva de har gjort! "Splash-fest" er en unik lek som byr på mange forskjellige utfordringer, oppgaver og spørsmål. Her blir en både bedre kjent med hverandre, men en vet aldri helt hva neste spørsmål på skjermen kan inneholde!</p>
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
			<p class='grey'>Hvert eneste spill har hundrevis av forskjellige regler og oppgaver! Dette er og tilfeldig sortert hver gang, slik at hvert eneste spill blir helt unikt! Samtidig så er de spillene som tar i bruk spillernes navn sortert tilfeldig, men rettferdig slik at alle får et forsøk!</p>
		</div>
	</section>
	<!--Download pages-->
	<div class='center'>
		<h2 class='red'> Last ned nå!</h2>
	</div>
	<section>
		<div class='download center'>
			<img src={appstore} href='' alt='last ned på iphone' />
		</div>
		<div class='download center'>
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
		width: 90%;

		display: grid;
		grid-auto-flow: row;
		justify-content: center;
		align-content: center;
		gap: 2rem;

		background-color: white;
		
		margin: 0 auto;
		text-align: center;
	}

	img{
		width: 100%;
		object-fit: cover;
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

	/* Reports and reviews*/
	.data{
		display: grid;
		grid-auto-flow: column;

		gap: 2rem;

		overflow-y: hidden;
		overflow: scroll;
	}

	.download{
		width: 20rem;
	}

	.center{
		margin: 0 auto;
	}

	.text{
		max-width: 40rem;
	}

	/*Login top*/
	.login-left{
		justify-items: start;
		align-self: start;
		display: grid;
		grid-auto-flow: row;
		margin-left: 10rem;
	}

	.user-img{
		width: 5rem;
		border-radius: 50%;
	}

	.login{
		background-color:transparent;
		font-weight: bold;
		border: none;
		font-size: 2rem;
	}
	
	.logout{
		background-color:transparent;
		font-weight: bold;
		border: none;
		font-size: 2rem;
	}

	@media only screen and (min-width: 64rem) {
		main {
			width: 70%;
			margin: 0 auto;
		}

		.showcase{
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
			align-items: center;
			justify-content: center;
			width: 70%;

			justify-self: center;
		}

		.showcase-item{
			width: 100%;
			margin: 0 auto;
		}

		.text{
			max-width: 100%;
		}
	}
	@media only screen and (min-width: 110rem) {
		main {
			width: 100rem;
			margin: 0 auto;
		}
	}
</style>