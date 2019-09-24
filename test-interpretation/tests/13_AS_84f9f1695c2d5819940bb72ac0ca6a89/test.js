var c0 = artifacts.require("./c0.sol");
var fs = require('fs');
var stream = fs.createWriteStream("profiling-events.log");

function logEvents(result) {
    // Log all encountered Solidity events ("emit ..."):
console.log("logEvent received: " + JSON.stringify(result));
    if ('logs' in result) {
        for (var i = 0; i < result.logs.length; ++i) {
            var b = result.logs[i];
            console.log("   > " + b.event + " = " + b.args + "   " +  JSON.stringify(b));
            stream.write(JSON.stringify(b) + "\n");
            for (m in b) {
                console.log("                > " + m); 
            }
        }
    }
}
contract('c0', function(accounts) {
  it('description', function() {
    var fs = require('fs');
    return c0.deployed().then(async function(instance) {
      console.log("Starting transaction...");
logEvents(await instance.f0(true, "25229"));
logEvents(await instance.f1("0xe6cbfFe56c0883A6B5793924EaE500b7fF1D5d29"));
    logEvents(await instance.f2(true, "0x17", "0xB10EACEF4A69546FA89689E919D24240D52ECB4F83508D81B3138810C33EC9EB", "62"));
        logEvents(await instance.f3("125", "-55"));
            logEvents(await instance.f4("0xF01C8011F2995F31B699B1", "208", "188", "-233"));
                logEvents(await instance.f5("1272136136677964323942683500000313158106354327596", "\u0081\u0081\u0033\u006b\u0083\u00e2\u0047\u0077\u007c\u00f9\u00b7\u000b\u0026\u0021\u00b8\u009a\u0097\u00de\u007b\u0062\u0010\u00b3\u0084\u0061\u00e3\u0029\u001b\u00ef\u001d\u00a8\u0033\u0092\u002f\u0062\u007b\u00a0\u0004\u00c8\u0016\u0014\u001a\u00fa\u0095\u00ec\u00da\u00a0\u0031\u004c\u004b\u00c3\u00a8\u00a9\u004b\u005a\u006b\u0049\u00fc\u0057\u008f\u004e\u00c7\u0040\u00c8\u00b8\u0033\u0087\u0033\u00de\u003e\u0026\u00dd\u00dd\u005d\u0024\u004c\u00de\u0012\u0031\u00c2\u001f\u0037\u00a0\u00f8\u00e3\u0078\u0097\u0031\u00dc\u0024\u007b\u00cc\u00aa\u0067\u0063\u0091\u0094\u005a\u005f\u006c\u00de\u00ac\u0059\u0029\u0091\u009c\u006d\u00d5\u00d7\u00fb\u007d\u00a2\u00b3\u0056\u0024\u00e4\u0012\u00f0\u00d9\u00af\u0001\u0059\u00c9\u00b2\u001e\u0052\u0087\u0077\u000c\u0088\u0061\u00e8\u004b\u001f\u0025\u000a\u006d\u0040\u0077\u0021\u0052\u003a\u002a\u0018\u00cc\u0039\u0065\u00e2\u00b1\u00a1\u00bf\u00a0\u0045\u0035\u00cd\u00ee\u0091\u009d\u002a\u0052\u001e\u00c5\u0068\u00ca\u0062\u0050\u00d2\u00d6\u0015\u00e2\u0078\u00d0\u007b\u0086\u007f\u0047\u00c5\u0031\u0067\u003d\u0075\u00c4\u0055\u0075\u00e9\u002a\u006d\u00de\u0010\u00e4\u009f\u00d3\u0071\u008a\u0049\u0086\u00cd\u00b8\u0090\u0023\u00b4\u00ad\u005e\u0046\u009e\u009b\u0063\u003a\u0047\u00c1\u00c8\u001f\u0046\u00d9\u0095\u0073\u0021\u0001\u003a\u00b2\u0051\u004b\u0026\u00af\u002a\u0050\u00aa\u0015\u00bf\u00a8\u0015\u00fb\u0066\u00f7\u0039\u00da\u00d0\u005a\u0080\u002a\u0039\u004e\u00be\u00eb\u007a\u00d5\u0028\u000a\u0094\u0096\u00ef\u00ce\u0083", "51"));
                    logEvents(await instance.f6("0x18D52C77F5D260F9174CEE79BCEA402F3E1B", "160"));
                        logEvents(await instance.f7("-397299065738119635368414328255540045843447739882438561397523389278734"));
                            logEvents(await instance.f8("0x5253368E4E66FCAE22676A9ED63DFE9091B59171213BC9BFB10220F10E746F", "-204", "0xC6DE97C61A5EE487DE0960E7F4D398734993", "195"));
                                logEvents(await instance.f9("0x77090CDC80DD64", "4889030119902762761909077948532400883855568234175564864974410205471"));
                                    logEvents(await instance.__outro());
   });
  });
});
