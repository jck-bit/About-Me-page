window.addEventListener("load", function() {
    document.querySelectorAll(".transition-fade, .transition-came, .transition-right").forEach(function(element) {
      element.classList.add("active");
    });
  });

//fetch github repos
let repositoryData = null;

async function fetchRepositories() {
  if (repositoryData) {
    // If repository data is already available, use it directly
    renderRepositories(repositoryData);
    return;
  }

  const username = 'jck-bit';
  const apiUrl = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    repositoryData = data; // Cache the repository data
    renderRepositories(repositoryData);
  } catch (error) {
    console.error(error);
  }
}

function renderRepositories(data) {
  const repositoryList = document.getElementById('repository-list');

  data.forEach(repo => {
    const column = document.createElement('div');
    column.classList.add('col-md-4', 'mb-4');

    const card = document.createElement('div');
    card.classList.add('card', 'h-100');
    card.innerHTML = `
      <div class="card-header">
        <i class="fa fa-github"></i>
        <p class="m-0">${repo.name}</p>
      </div>
      <div class="card-body">
        <p class="card-text">${repo.description}</p>
      </div>
      <div class="card-footer d-flex  align-items-center ">
        <span class="card-text">${repo.language}</span>
        <span><i class="fa fa-star"></i> Stars: ${repo.stargazers_count}</span>
        <span><i class="fa fa-code-fork"></i> Forks: ${repo.forks_count}</span>
      </div>
    `;

    column.appendChild(card);
    repositoryList.appendChild(column);
  });
}

document.addEventListener('DOMContentLoaded', fetchRepositories);




