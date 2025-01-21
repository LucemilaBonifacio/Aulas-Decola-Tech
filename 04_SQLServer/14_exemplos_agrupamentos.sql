USE DB_RH
GO

--1. EXEMPLO DE FUN��ES DE AGREGA��O
SELECT * FROM TB_CARGOS

SELECT
	SUM(SALARIO) AS SOMA,
	AVG(SALARIO) AS MEDIA,
	MAX(SALARIO) AS MAXIMO,
	MIN(SALARIO) AS MINIMO,
	COUNT(SALARIO) AS QUANTIDADE,
	STDEV(SALARIO) AS [DESVIO PADRAO]
FROM TB_CARGOS


--2. USAMOS GROUP BY PARA AGRUPAR OS RESULTADOS USANDO OS VALORES DAS COLUNAS AGRUPADAS
SELECT
	SUM(SALARIO) AS SOMA,
	AVG(SALARIO) AS MEDIA,
	MAX(SALARIO) AS MAXIMO,
	MIN(SALARIO) AS MINIMO,
	COUNT(SALARIO) AS QUANTIDADE,
	STDEV(SALARIO) AS [DESVIO PADRAO]
FROM TB_CARGOS
GROUP BY TP_SALARIO


--3. QUANDO DESEJAMOS EXIBIR O VALOR DE OUTRA COLUNA QUE N�O FA�AM PARTE DA
-- AGREGA��O, ESTAS DEVEM SER AGRUPADAS
SELECT
	SUM(SALARIO) AS SOMA,
	AVG(SALARIO) AS MEDIA,
	MAX(SALARIO) AS MAXIMO,
	MIN(SALARIO) AS MINIMO,
	COUNT(SALARIO) AS QUANTIDADE,
	STDEV(SALARIO) AS [DESVIO PADRAO],
	TP_SALARIO
FROM TB_CARGOS
GROUP BY TP_SALARIO

--4. USANDO UMA CONSULTA COM TODAS AS TABELAS, INCLUINDO JUN��ES E AGRUPAMENTO
SELECT
	A.DESCRICAO AS AREA,
	C.DESCRICAO AS CARGO,
	SUM(C.SALARIO) AS [SOMA SAL�RIO],
	COUNT(*) AS QUANTIDADE,
	C.TP_SALARIO AS TIPO,
	I.DATA_INSCRICAO AS DATA,
	CD.CPF AS CPF,
	CD.NOME AS NOME
FROM 
	TB_AREAS A JOIN TB_CARGOS C 
		ON A.ID = C.ID_AREA
	JOIN TB_INSCRICOES I 
		ON C.ID = I.ID_CARGO
	JOIN TB_CANDIDATOS CD 
		ON I.CPF = CD.CPF
GROUP BY
A.DESCRICAO, C.DESCRICAO, C.TP_SALARIO, I.DATA_INSCRICAO, CD.CPF, CD.NOME

--
SELECT
	A.DESCRICAO AS AREA,
	C.DESCRICAO AS CARGO,
	--SUM(C.SALARIO) AS [SOMA SAL�RIO],
	COUNT(*) AS QUANTIDADE,
	--C.TP_SALARIO AS TIPO,
	--I.DATA_INSCRICAO AS DATA,
	CD.CPF AS CPF,
	CD.NOME AS NOME
FROM 
	TB_AREAS A JOIN TB_CARGOS C 
		ON A.ID = C.ID_AREA
	JOIN TB_INSCRICOES I 
		ON C.ID = I.ID_CARGO
	JOIN TB_CANDIDATOS CD 
		ON I.CPF = CD.CPF
GROUP BY
A.DESCRICAO, 
C.DESCRICAO, 
--C.TP_SALARIO, 
--I.DATA_INSCRICAO, 
CD.CPF, CD.NOME

--EXERC�CIO 1 - QUANTIDADE DE INSCRI��ES POR CANDIDATO
SELECT
	--A.DESCRICAO AS AREA,
	--C.DESCRICAO AS CARGO,
	--SUM(C.SALARIO) AS [SOMA SAL�RIO],
	COUNT(*) AS QUANTIDADE,
	--C.TP_SALARIO AS TIPO,
	--I.DATA_INSCRICAO AS DATA,
	CD.CPF AS CPF,
	CD.NOME AS NOME
FROM 
	TB_AREAS A JOIN TB_CARGOS C 
		ON A.ID = C.ID_AREA
	JOIN TB_INSCRICOES I 
		ON C.ID = I.ID_CARGO
	JOIN TB_CANDIDATOS CD 
		ON I.CPF = CD.CPF
GROUP BY
--A.DESCRICAO, 
--C.DESCRICAO, 
--C.TP_SALARIO, 
--I.DATA_INSCRICAO, 
CD.CPF, CD.NOME

--EXERC�CIO 2 - QUANTIDADE DE INSCRI��ES POR CARGO
SELECT
	--A.DESCRICAO AS AREA,
	C.DESCRICAO AS CARGO,
	--SUM(C.SALARIO) AS [SOMA SAL�RIO],
	COUNT(*) AS QUANTIDADE,
	--C.TP_SALARIO AS TIPO,
	--I.DATA_INSCRICAO AS DATA,
	--CD.CPF AS CPF,
	CD.NOME AS NOME
FROM 
	TB_AREAS A JOIN TB_CARGOS C 
		ON A.ID = C.ID_AREA
	JOIN TB_INSCRICOES I 
		ON C.ID = I.ID_CARGO
	JOIN TB_CANDIDATOS CD 
		ON I.CPF = CD.CPF
GROUP BY
--A.DESCRICAO, 
C.DESCRICAO, 
--C.TP_SALARIO, 
--I.DATA_INSCRICAO, 
--CD.CPF, 
CD.NOME
