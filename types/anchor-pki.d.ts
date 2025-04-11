declare module 'anchor-pki/auto-cert/integrations/next' {
    const autoCert: (options: { enabledEnv?: string }) => (config: any) => any;
    export default autoCert;
  }