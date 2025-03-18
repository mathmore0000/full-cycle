Subclasses podem ser substituídas por suas classes pai


Exemplo de erro:

Movie -> classe com método increaseVolume
TheLionKing -> classe filha de movie

Nesse cenário está tudo certo, o principio é respeitado, porque podemos substituir onde movie for usado por TheLionKing.

MordernTimes -> classe filha de movie que não implementa increaseVolume (filme mudo)

Agora o cenário apresenta erro, o principio não é mais respeitado já que não podemos mais substituir onde movie for usado por ModernTimes.

![[Pasted image 20250318101517.png]]
![[Pasted image 20250318101547.png]]
