import { Director } from "./director";
import { SaltWaterBuilder } from "./salt_builder";

const builder = new SaltWaterBuilder();
const dir = new Director(builder);
dir.constract();
const saltWater = builder.getResult();
