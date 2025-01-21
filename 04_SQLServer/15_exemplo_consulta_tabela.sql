SELECT
	C.ID AS ID,
	A.DESCRICAO AS AREA,
	C.DESCRICAO AS CARGO,
	C.SALARIO AS SALARIO,
	CASE C.TP_SALARIO
	  WHEN 1 THEN 'MENSAL'
	  WHEN 2 THEN 'POR HORA'
	END AS TIPO

FROM TB_AREAS A INNER JOIN TB_CARGOS C ON A.ID = C.ID_AREA