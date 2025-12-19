<script>
    // @ts-nocheck

    import SkillsPreview from "./SkillsPreview.svelte";
    import eachSkill from './skills_data.json';

    let skillEnteries = Object.entries(eachSkill) 

    /**
     * Chunks an array into smaller arrays of a specified size.
     * @param {Array<Object>} arr - The original array.
     * @param {number} size - The size of each chunk.
     * @returns {Array<Array<Object>>} The chunked array.
     */
    function chunkData(arr, size) {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArray.push(arr.slice(i, i + size))
        }
        return chunkedArray;
    }

    const chunckedSkillEnteries = chunkData(skillEnteries, 2);

</script>

<div class="container">
    <div class="left_column">
        <div class="extra_padding"> 
            <p style="padding">December 16th, 2025</p>
        </div>

        <div class="center_contents">
            <img src="profile-picture(1).png" alt="profile" class="profile_picture">
        </div>
    </div>

    <div class="right_column">
        <div class="center_contents">
            <h1>Hello World!</h1>
        </div>

        <img src="../about-me-4.png" alt="about me" style="width: 100%">

        <div class="extra_30_padding">
            <div class="skills">
                <div class="curved-heading">
                    <h2 style="color: white; padding: 3px 20px 3px 20px"> Skills </h2>
                </div>
                
                <div style="padding: 20px 20px 20px 20px; background-color: white; border-radius: 8px;">
                    {#each chunckedSkillEnteries as skillChunk, i}
                        <div class="container">

                        {#each skillChunk as [key, value], i}
                            <SkillsPreview 
                                logo_link={value.logo}
                                skill_name={value.name}
                                skill_experience={value.experience}
                            />
                            {#if i%2 == 0}
                                <div style="width:80px"></div>
                            {/if}
                        {/each}
                        
                        {#if i < chunckedSkillEnteries.length-1}
                            <div style="height:80px"></div>
                        {/if}
                            
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>