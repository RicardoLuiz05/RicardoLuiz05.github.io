const personagens = [{
    class: 'Mafuyu_Sato',
    id: 'foto_mafuyu',
    imgP: 'img/personagens/mafuyu_sato.jpg',
    imgF: 'img/fundo_mafuyu.jpg',
    conteudo: 'conteudo_mafuyu',
    fundo:'fundo_mafuyu',
    nome:'Mafuyu Sato',
    texto: '<il><ul>Kaji: 佐藤 真冬</ul><ul>Altura: 173cm</ul><ul>Aniversário: 28 de fevereiro</ul><ul>Tipo sanguíneo: AB</ul><ul>Habilidade: vocalista, guitarrista</ul><ul>Dublador: Yano Shougo</ul></il><p>Mafuyu é um dos protagonistas do anime, sua história começa com ele encontrando um garoto sonolento em uma escada, </p>'
},
{
    class: 'Ritsuka_Uenoyama',
    id: 'foto_uenoyama',
    imgP: 'img/personagens/ritsuka_uenoyama.png',
    conteudo: 'conteudo_uenoyama',
    fundo:'fundo_uenoyama',
    nome:'Ritsuka Uenoyama',
    texto: '<il><ul>Kaji: 上ノ山 立夏</ul><ul>Altura: 175cm</ul><ul>Aniversário: 1 de agosto</ul><ul>Tipo sanguíneo: B</ul><ul>Habilidade: guitarrista</ul><ul>Dublador: Uchida Yuuma</ul></il><p>Mafuyu é um dos protagonistas do anime, sua história começa com ele encontrando um garoto sonolento em uma escada, </p>'
},
{
    class: 'Nakayama_Haruki',
    id: 'foto_haruki',
    imgP: 'img/personagens/nakayama_haruki.jpg',
    conteudo: 'conteudo_haruki',
    fundo:'fundo_haruki',
    nome:'Nakayama Haruki',
    texto: 'Ainda estou pensando, por favor não me atrapalhe!'
},
{
    class: 'Akihiko_Kaji',
    id: 'foto_akihiko',
    imgP: 'img/personagens/akihiko_kaji.jpg',
    conteudo: 'conteudo_akihiko',
    fundo:'fundo_akihiko',
    nome:'Akihiko Kaji',
    texto: 'Ainda estou pensando, por favor não me atrapalhe!'
},
{
    class: 'Ugetsu_Murata',
    id: 'foto_ugetsu',
    imgP: 'img/personagens/ugetsu_murata.jpg',
    conteudo: 'conteudo_ugetsu',
    fundo:'fundo_ugetsu',
    nome:'Ugetsu Murata',
    texto: 'Ainda estou pensando, por favor não me atrapalhe!'
},
]
function forma(personagens){

 return `<div class=${personagens.class}>
      <div id="${personagens.id}" style= "background-image: url(${personagens.imgP})">
      
      </div>
      <div class="${personagens.conteudo}">
        <div class="${personagens.fundo} style= "background-image: url(${personagens.imgF})"><h3>${personagens.nome}</h3></div>
      ${personagens.texto}
      </div>
    </div>`};

const Percorredor = personagens.map( (personagens) => forma(personagens)).join('');
const Container = document.querySelector('#Receber');
console.log(Percorredor)

Container.innerHTML = Percorredor;
