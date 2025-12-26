<script>
    export let data;
    
    // const projectDetails = import(/* @vite-ignore */ `../../../display-data/projects/${data.slug}.json`);
    // import file_data from '../../../display-data/projects/flappy-drone.json'
    
    // console.log(projectDetails);
</script>
<div class = "name-section" id="home">
    <section>
        <p style="padding-bottom: 30px"> Hello World! My name is </p>
        <div>
            <h1><span class="text-spacer"></span><span class="top-name">{data.slug}</span></h1> 
        </div>
    </section>
</div>