[[RPC]] - Remote Procedure Call - Framework desenvolvido pela Google para facilitar o processo de comunicação entre sistemas de forma rápida, leve e independente da linguagem. Utiliza [[Protocol Buffers]].

Casos de uso:
- Ideal para microsserviços;
- Mobile, Browser e Backend;
- Streaming bidirecional utilizando [[HTTP 2]].

Formatos de comunicação:
- [[API Unary]];
- [[API Server streaming]];
- [[API Client streaming]];
- [[API Bi directional streaming]].


REST vs gRPC

REST:
- Texto / JSON;
- Unidirecional;
- Alta tolerância;
- Sem contrato (maior chance de erros);
- Sem suporte a streaming (Request / Response);
- Design pré-definido (POST/PUT/DELETE/GET/PATCH);
- Bibliotecas de terceiro.

gRPC:
- Protocol Buffers;
- Bidirecional e Assíncrono;
- Baixa latência;
- Contrato definido (protofile .proto);
- Design é livre;
- Geração de código.