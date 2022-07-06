var imoveis = require('../ / ');
var axios = require("axios")
var qs = require("querystring")

const imoveisControlador = {};
//CREATE
imoveisControlador.inserirImoveisControlador = function(req, res){
    imoveis.create({
    cod: req.body.cod,
    codCorretor: req.body.codCorretor,
    nomePro: req.body.nomePro, 
    locol: req.body.locol,
    imovel: req.body.imovel,  
    situacao: req.body.situacao,
    valor: req.body.valor
    }).then(
        function(){
            res.status(200).redirect("/");
        }
    ).catch(
        function(error){
            res.status(500).send("Erro ao criar imóvel " + error);
        }
    )
}
//UPDATE
imoveisControlador.atualizarImoveisBanco = function (req, res) {
    imoveis.update({
    cod: req.body.cod,
    codCorretor: req.body.codCorretor,
    nomePro: req.body.nomePro, 
    locol: req.body.locol,
    imovel: req.body.imovel,  
    situacao: req.body.situacao,
    valor: req.body.valor
    },{
        where: {
            id: req.params.id
        }
    }).then(
        function(){
            res.sendStatus(200)
        }
    ).catch(
        function(error){
            res.status(500).send("Erro ao atualizar o imóvel: " + error)
        }
    )
}
//DELETE
imoveisControlador.removerImovelBanco = function (req, res) {
    imoveis.destroy(
        {
        where: {
            id: req.params.id
        }
    }).then(
        function(){
            res.sendStatus(200)
        }
    ).catch(
        function(error){
            res.status(500).send("Erro ao remover o imovel: " + error)
        }
    )
}
//métodos do handlebars
imoveisControlador.cadastro = function (req, res) {
    try {
        res.render("cadastroImoveis")
    } catch (error) {
        res.status(500).send("Erro ao acessar página de cadastro: " + error);
    }
};
//solicitarEditarFormulario

imoveisControlador.editarImovel = function(req,res){
    imoveis.findOne({
        raw: true,
        where: {
            id: req.params.id
        }
    }).then(
        function(car){
            res.render("editar",{
                cod: req.body.cod,
                codCorretor: req.body.codCorretor,
                nomePro: req.body.nomePro, 
                locol: req.body.locol,
                imovel: req.body.imovel,  
                situacao: req.body.situacao,
                valor: req.body.valor
            })
        }
    ).catch(
        function(error){
            res.status(500).send("Erro ao acessar página de edição: " + error)
        }
    )
}
//montarRequisiçãoEditar
imovelControlador.montarReqEdicao = function (req, res) {
    axios.put("/" + req.params.id,
        qs.stringify({
            cod: req.body.cod,
            codCorretor: req.body.codCorretor,
            nomePro: req.body.nomePro, 
            locol: req.body.locol,
            imovel: req.body.imovel,  
            situacao: req.body.situacao,
            valor: req.body.valor
        }),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            proxy:{
                host: "...",
                port: 3000
            }
        }
    ).then(function () {
            res.status(200).redirect("/")
        })
    .catch(function (err) {
        res.status(500).send("Erro ao editar o imovel: " + err);
    })
}
//montarRequisiçãoRemover
imovelControlador.montarReqDelete = function (req, res) {
    axios.delete('/' + req.params.id,{
        proxy:{
            host: "...",
            port: 3000
        }
        
    }).then(function () {
            res.status(200).redirect("/")
        })
        .catch(function (err) {
            res.status(500).send("Erro ao apagar um imovel: " + err);
        })
}



module.exports = imovelControlador;