REPORTER = spec

test:
	$(info verifying code lintin and applying Unit Tests:)
	@./node_modules/.bin/xo
	@./node_modules/.bin/mocha \
		--reporter spec \
		--require should \
		--recursive \
		test

.PHONY: test
