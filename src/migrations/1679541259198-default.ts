import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679541259198 implements MigrationInterface {
    name = 'default1679541259198'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`cargos\` (\`id_cargo\` int NOT NULL AUTO_INCREMENT, \`cargo\` text NOT NULL, PRIMARY KEY (\`id_cargo\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`usuarios\` (\`id_usuario\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`email\` text NOT NULL, \`senha\` text NOT NULL, \`id_cargo\` int NULL, PRIMARY KEY (\`id_usuario\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pedidos\` (\`id_pedido\` int NOT NULL AUTO_INCREMENT, \`material\` text NULL, \`prioridade\` text NOT NULL, \`maquina\` text NULL, \`estado\` text NULL, \`arquivo\` text NULL, \`medida\` text NULL, \`id_horaDisponivel\` int NULL, \`id_autorPedido\` int NULL, \`id_autorAutorizador\` int NULL, PRIMARY KEY (\`id_pedido\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`horaDisponivel\` (\`id_hora\` int NOT NULL AUTO_INCREMENT, \`dataInicio\` text NOT NULL, \`dataFim\` text NOT NULL, \`disponivel\` tinyint NOT NULL, PRIMARY KEY (\`id_hora\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pedidosAnonimo\` (\`id_pedidoAnonimo\` int NOT NULL AUTO_INCREMENT, \`material\` text NULL, \`maquina\` text NULL, \`estado\` text NULL, \`arquivo\` text NULL, \`medida\` text NULL, \`codigo\` text NULL, \`id_horaDisponivel\` int NULL, \`id_autorAutorizadorAnonimo\` int NULL, PRIMARY KEY (\`id_pedidoAnonimo\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD CONSTRAINT \`FK_d5bc49a24115cb362400988d1c8\` FOREIGN KEY (\`id_cargo\`) REFERENCES \`cargos\`(\`id_cargo\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD CONSTRAINT \`FK_208826353b1be16c00ea5a9099a\` FOREIGN KEY (\`id_horaDisponivel\`) REFERENCES \`horaDisponivel\`(\`id_hora\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD CONSTRAINT \`FK_2dff598b93ad16a3a689da63ccf\` FOREIGN KEY (\`id_autorPedido\`) REFERENCES \`usuarios\`(\`id_usuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD CONSTRAINT \`FK_8ece1949054651a9c3bf0384783\` FOREIGN KEY (\`id_autorAutorizador\`) REFERENCES \`usuarios\`(\`id_usuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` ADD CONSTRAINT \`FK_feaa58d9634e2758729f20154b6\` FOREIGN KEY (\`id_horaDisponivel\`) REFERENCES \`horaDisponivel\`(\`id_hora\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` ADD CONSTRAINT \`FK_32028fc5ea024bb0f60d97f481e\` FOREIGN KEY (\`id_autorAutorizadorAnonimo\`) REFERENCES \`usuarios\`(\`id_usuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    } 

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` DROP FOREIGN KEY \`FK_32028fc5ea024bb0f60d97f481e\``);
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` DROP FOREIGN KEY \`FK_feaa58d9634e2758729f20154b6\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP FOREIGN KEY \`FK_8ece1949054651a9c3bf0384783\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP FOREIGN KEY \`FK_2dff598b93ad16a3a689da63ccf\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP FOREIGN KEY \`FK_208826353b1be16c00ea5a9099a\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP FOREIGN KEY \`FK_d5bc49a24115cb362400988d1c8\``);
        await queryRunner.query(`DROP TABLE \`pedidosAnonimo\``);
        await queryRunner.query(`DROP TABLE \`horaDisponivel\``);
        await queryRunner.query(`DROP TABLE \`pedidos\``);
        await queryRunner.query(`DROP TABLE \`usuarios\``);
        await queryRunner.query(`DROP TABLE \`cargos\``);
    }

}
