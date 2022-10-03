setRepository();
function setRepository() {
  const fetchGit = async (repository) => {
    const APIResponse = await fetch(
      `https://api.github.com/users/Stuutis/repos`
    );

    const data = await APIResponse.json();
    console.log(data);
    repositoryDiv.innerHTML = data
      .map((repo) => {
        console.log(repo.html_url);
        return ` 
    
    <div class="projects_box">
      <a href="${repo.html_url}" target="_blank">${repo.full_name}</a>
      <p class="description">${repo.description}</p>
      <span id="language">${repo.language ? repo.language : ' - '}</span>
   </div>
    `;
      })
      .join('');
  };
  const repositoryDiv = document.getElementById('all_projects');

  fetchGit();
}
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#projects, 
#all_projects,
#all_projects .projects_box`);
