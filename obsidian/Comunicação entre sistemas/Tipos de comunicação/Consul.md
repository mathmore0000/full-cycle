Hashicorp Consul

![[Pasted image 20250205200501.png]]

- Service discovery;
- [[Health Check ativo]];
- [[Multi região & Multi cloud]];
- Service segmentation;
- Load balancer na Borda (Layer 7);
- Key / Value Storage;
- [[Service Registry Centralizado]];
- Opensource / Enterprise.


Agent, Client e Server:
- Agent: Processo que fica sendo executado em todos os nós do cluster. Pode estar sendo executado em Client Mode ou Server Mode;
- Client: Registra os serviços localmente, health check, encaminha as informações e configurações dos serviços para o Server;
- Server: Mantém o estado do cluster, registra os serviços, Membership (quem é client e quem é server), retorno de queries (DNS ou API), troca de informações entre datacenters, etc.

Dev Mode:
- NUNCA utilize em produção;
- Teste de features, exemplos;
- Roda como servidores;
- Não escala;
- Registra tudo em memória




