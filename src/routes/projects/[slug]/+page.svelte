<script>
    import { error } from '@sveltejs/kit';
    import { onMount } from 'svelte';

    export let data;
    
    let file_data = {};
    
    async function loadData() {
        // const file_path = `../../../display-data/projects/${data.slug}.json`;
        const module = await import(`../../../display-data/projects/${data.slug}.json`);
        file_data = module.default;
        
        if (file_data) {
            file_data = JSON.stringify(file_data);
        } else {
            error(404, {
                message: 'Not found'
            });
        }
    }

    onMount(() => {
        loadData();
    });
</script>


<div class = "name-section" id="home">
    <section>
        <p style="padding-bottom: 30px"> Hello World! My name is </p>
        <div>
            <h1><span class="text-spacer"></span><span class="top-name">{data.slug}</span></h1> 
        </div>
    </section>
</div>

{#if file_data}
  <p>{file_data}</p>
{:else}
  <p>Loading data...</p>
{/if}