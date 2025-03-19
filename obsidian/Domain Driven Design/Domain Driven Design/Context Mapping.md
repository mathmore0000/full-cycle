
Quando falamos em sistemas complexos que usam DDD, precisamos ter uma visão geral de como nossos subdomínios se comunicam e interagem entre si após convertermos as separações em delimitação de contextos. 

![[Pasted image 20250319150755.png]]
Para isso criamos um mapeamento de contextos, e relacionamos os subdomínios.
Essas relações podem ser simples, de parceria, upstream e downstream.

Partnership (parceria) -> Relação entre dois contextos que trabalham juntos e se consomem (ex, shared kernel).
Cliente / Fornecedor -> Um time fornece um serviço para outro time para que o segundo possa agir (ex, venda -> pagamento).
	Upstream -> Fornecedor, fornece e dita as regras do serviço.
	Downstream -> Cliente, consome e se adapta as regras ditadas.

![[Pasted image 20250319151637.png]]

Conformismo -> As vezes relações conformistas surgem e o cliente precisa se conformar sobre como utilizar o serviço que o fornecedor fornece.
![[Pasted image 20250319151808.png]]

Quanto mais conformista a relação é mais tendemos a se amarrar em outros sistemas. Porém uma coisa chamada ACL, anti-corruption layer existe, é uma camada entre seu sistema cliente e o fornecedor conformista, isso existe para que sistemas não fiquem amarrados e se for necessário trocar o fornecedor o código alterado será mínimo e na camada anticorrupção.


Padrões
https://github.com/ddd-crew/context-mapping
![[Pasted image 20250319152459.png]]![[Pasted image 20250319152558.png]]