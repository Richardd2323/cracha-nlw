const LinksSocialMedia = {
  github: 'Richardd2323',
  youtube: '',
  facebook: '',
  instagram: '',
  twitter: ''
}
/*function showMeSomething(link) {
  alert(link)
}

showMeSomething(links.github)*/
function changeSocialMediaLinks() {
  /*document.getElementById('userName').textContent =
    'Richard Alves'

  userName.textContent = 'Aline'*/
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    //alert(li.children[0].href)
  }
  //git.href = `https://github.com/${LinksSocialMedia.github}`
  //alert(git.href)
}

changeSocialMediaLinks()

function getGitHubInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userAvatar.src = data.avatar_url
      userLink.children[1].textContent = data.login
    })
}

getGitHubInfos()
