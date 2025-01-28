Possibilita mais granularidade com frontend -> backend. 

Diminui chamadas de rest, exemplo:

Caso de uso:

REST: 

Backend:
- Uma api RESTFull que traz todas as informações necessárias para a home.

Frontend:
    Browser:
	    - Recebe, trata e utiliza todas as informações.
	Mobile:
		- Recebe, trata, utiliza partes das informações recebidas e descarta o resto.
	Smart TV:
		- Recebe, trata, utiliza partes das informações recebidas, descarta o resto e precisa chamar outro endpoint para receber mais informações necessárias.

GraphQL:

Backend:
- Uma api GraphQL que retorna informações conforme pedidas pelo frontend.

Frontend:
    Browser:
	    - Pede somente informações que vai utilizar, as recebe, trata e utiliza todas as informações.
	Mobile:
		- Pede somente informações que vai utilizar, as recebe, trata e utiliza todas as informações.
	Smart TV:
		- Pede somente informações que vai utilizar, as recebe, trata e utiliza todas as informações.