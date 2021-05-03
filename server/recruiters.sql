create table recruiters (
	id BIGSERIAL,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	phone VARCHAR(50) NOT NULL,
	prime_vendor VARCHAR(50) NOT NULL,
	end_client VARCHAR(50) NOT NULL,
	interview_pipeline VARCHAR(150),
	current_status VARCHAR(50),
	date_time timestamptz 
);


INSERT INTO recruiters(first_name, last_name, email, phone, prime_vendor, end_client, interview_pipeline, current_status, date_time) VALUES
('krishna', 'kammili', 'kkrajus777@gmail.com', '4695696257', 'apex', 'ec', 'ip', 'cs', 'NOW()');

CREATE TABLE doc(id BIGSERIAL, doc BYTEA);
