
"Um aggregate é um conjunto de objetos associados que tratamos como uma unidade para propósito de mudança de dados"

![[Pasted image 20250331150236.png]]

Entidades se relacionam e podem existir somente por causa de outras entidades (item->order) ou existir além de outras entidades (customer->order). 
Se relacionam como fortemente acopladas (item->order) onde existem com a outra entidade ou fracamente acoplada (order->customer) onde existem com um id de referência. 
Definimos nomes de agregados identificando a "cabeça" (root) do agregado.