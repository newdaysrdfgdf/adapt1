const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'d538ecad-9e3b-444c-ad97-619abd49fd18'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
