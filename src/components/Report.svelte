<script>
    import {db} from '../firebase.js'

    //den peker på et regiser i databasen som heter bilregister
    const reports = db.collection('reports')

    export let id = ''
    export let repdata = {}


    const slettRep = () =>{
        const rep = reports.doc(id)
        rep.delete();
    }



</script>

<section>
    <h2 class='bold'>{repdata.gameName}</h2>
    <h3>{repdata.chosenRule}</h3>
    <h3 class='underline'>{repdata.reportCategory}</h3>
    <div class='text italic'>
        <h3 class=''>{repdata.reportMessage}</h3>
    </div>
    <button class='delete' on:click={slettRep}>Delete</button>
</section>

<style>
    section{
            display: grid;
            grid-template-rows: 1fr 1fr 1fr 7fr 1fr;
            padding: 1rem;
            align-items: center;

            background-color: rgb(235, 55, 55);
            border-radius: 5%;

            height: 30rem;
            width: 20rem;
        }


    h3{
        color: white;
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