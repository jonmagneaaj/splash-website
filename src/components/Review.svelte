<script>
    import {db} from '../firebase.js'

    //den peker på et regiser i databasen som heter bilregister
    const reviews = db.collection('reviews')

    export let id = ''
    export let rewdata = {}

    //Images
    let ugh = 'img/frown-regular.png'
    let ok = 'img/meh-regular.png'
    let yay = 'img/grin-alt-regular.png'


    const slettRep = () =>{
        const rew = reviews.doc(id)
        rew.delete();
    }

    const slettRew = () =>{
        const rew = reviews.doc(id)
        rew.delete();
    }



</script>

<section>
    {#if rewdata.rating=='1'}
        <div class='center'>
            <img class='review-img' src={ugh} alt='frown smiley'>
        </div>
    {:else if rewdata.rating=='2'}
        <div class='center'>
            <img class='review-img center' src={ok} alt='meh smiley'>
        </div>
    {:else if rewdata.rating=='3'}
        <div class='center'>
            <img class='review-img center' src={yay} alt='happy smiley'>
        </div>
    {:else}
    <div></div>
    {/if}
    <div class='text italic'>
        <h2 class='italic'>{rewdata.tilbakemelding}</h2>
    </div>
    <button class='delete' on:click={slettRew}>Delete</button>
</section>


<style>
    section{
        display: grid;
        grid-template-rows: 2fr 7fr 1fr;
        padding: 1rem;
        align-items: center;

        background-color: rgb(73, 174, 120);
        border-radius: 5%;

        height: 30rem;
        width: 20rem;
    }



    h2{
        color: white;
    }

    .review-img{
        width: 3rem;
    }

    .text{
        height: 100%;
        width: 100%;
        overflow: auto;
        overflow-x: scroll;
    }

    .delete{
        background-color: white;
        border-radius: 20rem;
        color: rgb(235, 55, 55);
        width: 10rem;
        height: 4rem;
        font-weight: bold;
        font-size: 1.8rem;
    }
    button{
        margin: 0 auto;
    }

</style>