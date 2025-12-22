<script>
    // @ts-nocheck

    import SkillsPreview from "./(index)/SkillsPreview.svelte";
    import eachSkill from './(index)/skills_data.json';

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
            <p>December 16th, 2025</p>
        </div>

        <div class="extra_padding">
            <img src="profile_picture(3).jpeg" alt="profile" class="profile_picture">
        </div>

        <br>

        <div class="extra_padding"> 
            <h1 style="padding-bottom: 0px;">Aanya Lakhani</h1>
            <p style="margin-top: 0px;">Web Developer</p>

            <br/>
            <p style="margin: 0px;">--- Skills</p>
            <p style="margin: 0px;">--- Education</p>
            <p style="margin: 0px;">--- Experience</p>
            <p style="margin: 0px;">--- Projects</p>
        </div>

    </div>

    <div class="right_column">
        <div class="center_contents">
            <h1>Hello World!</h1>
        </div>

        <div class="center_contents">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. D</p>
        </div>

        <hr />
        <br>
        <br>

        <div class="skills">
            <div class="curved-heading">
                <h2 style="padding: 3px 20px 3px 20px"> Technical Skills </h2>
            </div>
            
            <div style="padding: 20px 20px 20px 20px; border-radius: 8px;">
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

        <br>
        <hr />
        <br>

        <div>
            <h2>Experience</h2>
        </div>

        <!-- Project Section -->
        <br>
        <hr />
        <br>

        <div>
            <h2>Projects</h2>
        </div>
    </div>
</div>