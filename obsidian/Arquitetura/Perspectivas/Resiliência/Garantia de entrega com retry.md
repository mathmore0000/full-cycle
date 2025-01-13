Retry -> Política para tentar novamente uma requisição/chamada que falhou;
Retry com exponencial backoff -> Tenta novamente depois de um tempo predefinido;
Retry com jitter -> Tenta novamente depois de um tempo predefinido + ruído de tempo.

A idéia é que com o retry ou o retry com exponencial backoff o sistema que recebe a requisição não conseguirá atender chamadas de N serviços depois de X segundos já que já não conseguiu da primeira vez. A solução é então adicionar um ruído nesse tempo de espera para que um serviço vá depois do outro.

![[Pasted image 20250113174809.png]]