const  paragrafo1  =  document . getElementById ( "paragrafo1" )
const  paragrafo2  =  documento . getElementsByClassName ( "paragrafo2" ) [ 0 ]
const  botao  =  document . getElementById ( "botao" )
//selecionando elementos do ex02
const  link  =  documento . getElementById ( "link" )
const  imagem  =  documento . getElementById ( "imagem" )
const  botaoimg  =  documento . getElementById ( "botaoimg" )

botao . addEventListener ( 'clique' ,  função ( ) {
    parágrafo1 . textContent  =  "Novo texto do parágrafo 1"
    parágrafo2 . textContent  =  "Novo texto do parágrafo 2"
} )

//Use getAttribute() e setAttribute() para alterar o href do link.
link . setAttribute ( 'href' ,  'https://www.petlove.com.br/' )
link . textContent  =  "Acessar Petlove"

//adicionando estilo no link
link . estilo . cor  =  "vermelho"
link . estilo . fontWeight  =  "negrito"

var  imagemAtual  =  1
botaoimg . addEventListener ( 'clique' ,  função ( ) {
    se ( imagemAtual  ===  1 ) {
        imagem . setAttribute ( 'src' ,  'img2.jpg' )
        imagemAtual  =  2
    } outro {
        imagem . setAttribute ( 'src' ,  'img1.jpg' )
        imagemAtual  =  1
    }
} )

imagem . estilo . largura  =  '600px'
imagem . estilo . altura  =  '500px'
imagem . estilo . objectFit  =  'capa'
imagem . estilo . borderRadius  =  '30px'
