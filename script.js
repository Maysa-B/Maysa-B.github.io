const soft = document.getElementById('soft');
const hard = document.getElementById('hard');
const imgMail = document.getElementById('mail');
const imgGit = document.getElementById('github');
const containerContact = document.getElementById('about-contact');
const imgLinkd = document.getElementById('linkedin');
const contentMail = `<h3>Email</h3>
<p>Para entrar em contato comigo por email utilize o seguinte endereço:</p>
<p><strong>maybsalvalaio@gmail.com</strong></p>`;
const contentGit = `<h3>Git Hub</h3>
<p>Para visualizar os projetos que venho realizando acesse o meu GitHub:</p>
<p><strong><a href="https://github.com/Maysa-B" target="_blank">Maysa-B</a></strong></p>`;
const contentLinked = `<h3>LinkedIn</h3>
<p>Acesse por meio dessa publicação o meu perfil nessa rede:</p>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6917083705270239235" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>`;

const contentSoft = () => {
    const container1 = document.getElementById('soft-container');
    const container2 = document.getElementById('hard-container');
    soft.style.backgroundColor = '#cb8bd1d5';
    hard.style.backgroundColor = '#935799';

    container1.style.display = 'flex';
    container2.style.display = 'none';
}

const contentHard = () => {
    const container1 = document.getElementById('soft-container');
    const container2 = document.getElementById('hard-container');
    hard.style.backgroundColor = '#cb8bd1d5';
    soft.style.backgroundColor = '#935799';

    container1.style.display = 'none';
    container2.style.display = 'flex';
}

imgGit.addEventListener('mouseover', contentG = () => containerContact.innerHTML = contentGit);
imgLinkd.addEventListener('mouseover', contentL = () => containerContact.innerHTML = contentLinked);
imgMail.addEventListener('mouseover', contentM = () => containerContact.innerHTML = contentMail);
soft.addEventListener('mouseover', contentSoft);
hard.addEventListener('mouseover', contentHard);

window.onload = () => {
    contentSoft();
    contentL();
}