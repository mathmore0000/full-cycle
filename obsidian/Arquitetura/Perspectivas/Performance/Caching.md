Reservar coisas já processadas e retornar ao segundo(...) usuário que pede o endpoint.

- Cache na borda / [[Edge computing]];
- Dados estáticos;
- Páginas web;
- Funções internas
	- Evite reprocessamento de algoritmos pesados;
	- Acesso ao banco de dados.
- Objetos.


Exclusivo VS Compartilhado

Exclusivo:
- Baixa latência;
- Duplicado entre os nós;
- Problemas relacionados a sessões.

Compartilhado:
- Maior latência;
- Não há duplicado;
- Sessões compartilhadas;
- Banco de dados externo
	- Redis;
	- Memcache;
	- MySQL.