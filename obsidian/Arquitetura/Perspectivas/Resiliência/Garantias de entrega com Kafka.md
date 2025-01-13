
Dependendo da importância do caso de uso podemos usar Ack 0, 1 ou -1

  0   ->  Sem confirmação de recebimento pelo broker;
  1    ->  Confirmação do líder é garantida mas de replicação não é;
-1    ->  Líder e replicas (seguidores abaixo) confirmam o recebimento.
![[Pasted image 20250113175321.png]]