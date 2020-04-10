import humanize from "@jsdevtools/humanize-anything";
import { ono } from "@jsdevtools/ono";
import { CarrierConfig, InlineOrReference } from "@shipengine/ipaas";
import { getCwd } from "../file-utils";
import { readConfig } from "../read-config";
import { readLogoConfig } from "./logo-config";

/**
 * Reads the config for a ShipEngine IPaaS carrier
 */
export async function readCarrierConfig(config: InlineOrReference<CarrierConfig>, cwd: string): Promise<CarrierConfig> {
  try {

    const newCwd = getCwd(config, cwd);

    config = await readConfig(config, "carrier", cwd);

    return {
      ...config,
      logo: await readLogoConfig(config.logo, newCwd),
    };
  }
  catch (error) {
    throw ono(error, `Error reading the carrier config: ${humanize(config)}`);
  }
}