var express=require('express');
var app=express();
app.get('/preguntas',function(req,res){
	res.send('<!DOCTYPE html>'+
'<html><head><meta charset=utf-8><title>PREGUNTAS</title></head>'+

'<body><h1>PREGUNTAS</h1>'+
'<form method="GET" action="/respuestas">'+	
'<input type="hidden" value="1" name="pregunta"/>'+		
'<label>¿Quién descubrió América?</label></br>'	+	
'<input type="text" value="" placeholder="responde aquí" name="respuesta"/></br>'	+	
'<input type="submit" value="Enviar"/>'	+	
	'</form>'+
	'<form method="GET" action="/respuestas">'+
	'<input type="hidden" value="2" name="pregunta"/>'+	
	'<label> ¿Capital de Portugal?</label></br>'+	
	'<input type="text" value="" placeholder="responde aquí" name="respuesta"/></br>'+	
	'<input type="submit" value="Enviar"/>'+	
	'</form>'+
'</body>'+
'</html>');
});
app.get('/respuestas',function(req,res){
	if (req.query.pregunta==1) {
		if (req.query.respuesta.toUpperCase()==='CRISTOBAL COLON') {
				res.send('<!DOCTYPE html>'+
'<html><head><meta charset=utf-8><title>respuesta</title></head>'+

'<body><h1>RESPUESTA</h1>'+
'<p>La respuesta de la pregunta '+req.query.pregunta+' es correcta.</p>'+
'<a href="/preguntas"> Volver a la página inicial</a>'+
'</body>'+
'</html>');

		}else{
			res.send('<!DOCTYPE html>'+
'<html><head><meta charset=utf-8><title>respuesta</title></head>'+

'<body><h1>RESPUESTA</h1>'+
'<p>La respuesta de la pregunta '+req.query.pregunta+' es incorrecta. La respuesta correcta es CRISTOBAL COLON</p>'+
'<a href="/preguntas"> Volver a la página inicial</a>'+
'</body>'+
'</html>');
		}
	}else{
		if (req.query.respuesta.toUpperCase()==='LISBOA') {
				res.send('<!DOCTYPE html>'+
'<html><head><meta charset=utf-8><title>respuesta</title></head>'+

'<body><h1>RESPUESTA</h1>'+
'<p>La respuesta de la pregunta '+req.query.pregunta+' es correcta.</br></p>'+
'<a href="/preguntas"> Volver a la página inicial</a>'+
'</body>'+
'</html>');

		}else{
			res.send('<!DOCTYPE html>'+
'<html><head><meta charset=utf-8><title>respuesta</title></head>'+

'<body><h1>RESPUESTA</h1>'+
'<p>La respuesta de la pregunta '+req.query.pregunta+' es incorrecta. </br>La respuesta correcta es LISBOA.</br></p>'+
'<a href="/preguntas"> Volver a la página inicial</a>'+
'</body>'+
'</html>');
	}
}
});
app.listen(8000);