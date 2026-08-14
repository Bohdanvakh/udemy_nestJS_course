import { Controller, Get } from "@nestjs/common";


@Controller('/app')
export class AppController {
    @Get('/root')
    getRootRoute() {
        return 'hi there';
    }

    @Get('/by')
    getBy() {
        return 'By there!';
    }
}