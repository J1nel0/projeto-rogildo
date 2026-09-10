# projeto-rogildo

1-  Criar uma API seguindo os princípios RESTFull para gerenciar ao menos dois recursos com relacionamento. 

2-  Deverão utilizar ouath para autenticar e jwt para os endpoints privados, devem ter ao menos 4 endpoints privados.

Tabelas:

Usuarios
JogosSalvos


Um usuário tem vários jogos salvos
Cada jogo salvo pertence a somente um usuário

Primary-key -> userId

Modelo de Relacionamentos:
- 1:N

db.usuario.hasMany(db.jogossalvos, {
    as: "jogossalvos",
    foreign-key: "usuarioId"
});

db.jogossalvos.belongsTo(db.usuarios, {
    as: "usuario",
    foreign-key: "usuarioId"
})




Uso de IA:

• problema encontrado;
• pergunta ou orientação solicitada à IA;
• solução sugerida;
• adaptações realizadas pela dupla;
• conhecimento adquirido durante o processo.

 



