CREATE DATABASE IS3_CASTELLANOS_RONALDD

CREATE TABLE USUARIO(
    USU_ID SERIAL NOT NULL,
    USU_NOMBRE VARCHAR (50),
    USU_CATALOGO INTEGER,
    USU_PASSWORD VARCHAR (150),
    USU_SITUACION SMALLINT DEFAULT 1,
    PRIMARY KEY (USU_ID)
);
