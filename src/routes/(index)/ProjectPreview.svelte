<link rel="stylesheet" href="/styles/homepage.css">
<link rel="stylesheet" href="/styles/projects.css">

<script>
    let { direction } = $props();
</script>

<div style={`${direction === 'left' ? 'margin-right: 5px' : 'margin-left: 5px'};
            ${direction === 'middle' ? 'margin-right: 5px':''}`}
     class="project-container">

    <div class="container">
        <div style="width: 90%">
            <img src="temp-image.png" alt="project banner" class="banner-image"/>
            <h3> Project Name </h3>
            <p> Short description.. </p>

        </div>
    </div>
</div>