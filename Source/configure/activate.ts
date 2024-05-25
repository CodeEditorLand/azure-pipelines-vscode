import * as vscode from "vscode";

import { telemetryHelper } from "../helpers/telemetryHelper";
import { configurePipeline } from "./configure";

export function activateConfigurePipeline(): void {
	vscode.commands.registerCommand(
		"azure-pipelines.configure-pipeline",
		async () => {
			await telemetryHelper.callWithTelemetryAndErrorHandling(
				"azurePipelines.configure-pipeline",
				async () => {
					await configurePipeline();
				},
			);
		},
	);
}
