const coordinates = [
    [106.40917606396049, 11.015175482220911],
    [106.40857585473668, 11.015436667706727],
    [106.40837742921319, 11.015526883112706],
    [106.40789195853147, 11.01574774360654],
    [106.40757307545144, 11.015892756768018],
    [106.40746783179578, 11.015941401006085],
    [106.40711474830441, 11.01612130074336],
    [106.40695488495254, 11.016196193466575],
    [106.40690964074292, 11.016218665047072],
    [106.4065244901914, 11.016397013448586],
    [106.40644269697299, 11.016435244257568],
    [106.40622114603426, 11.016536569541794],
    [106.40610394126868, 11.016590606840131],
    [106.40514749810525, 11.017031871046964],
    [106.40452069263296, 11.017336205709016],
    [106.40412039477714, 11.017528225755973],
    [106.40390830461148, 11.017625394316493],
    [106.40267624459212, 11.01818584313604],
    [106.40257411351597, 11.018229379581806],
    [106.40250335625615, 11.018257033290094],
    [106.4023841804198, 11.01830654851857],
    [106.40197532519296, 11.01849645357568],
    [106.40166793671789, 11.018640732534164],
    [106.4014140591561, 11.01875765436233],
    [106.40086654015674, 11.019013955497497],
    [106.39948549778985, 11.019656490431917],
    [106.39863347835846, 11.020052967210308],
    [106.39667585524363, 11.020963798032001],
    [106.39614393276788, 11.021211510140546],
    [106.395707106187, 11.02141817498633],
    [106.39540847969403, 11.02155935710415],
    [106.3909282709851, 11.023639521877067],
    [106.38889415436675, 11.024619529628952],
    [106.38742541203834, 11.025266917736047],
    [106.38677112170818, 11.02551456321327],
    [106.38649422304987, 11.025580884515938],
    [106.38565808796224, 11.025776722581723],
    [106.38512058626733, 11.025903211281255],
    [106.38349574224766, 11.02628746211143],
    [106.38085396257429, 11.02690068140011],
    [106.37866345917797, 11.027412739870716],
    [106.3766542057036, 11.027901380998655],
    [106.37504295927437, 11.028299057545082],
    [106.37486074350362, 11.028341990772255],
    [106.3740781125668, 11.028636866477102],
    [106.37379303114247, 11.028775863420234],
    [106.36989199005897, 11.030674932945255],
    [106.3681186081541, 11.031495048809768],
    [106.36727532681307, 11.031869139301845],
    [106.36662115412521, 11.032160874408314],
    [106.36622667813167, 11.032334910982913],
    [106.36532735269174, 11.032687599930565],
    [106.36484051857445, 11.032885354893972],
    [106.36477211421162, 11.032915151314965],
    [106.36453447179537, 11.033038491273581],
    [106.36448775937296, 11.03295933986015],
    [106.36440671287528, 11.032845439740733],
    [106.36429431579418, 11.032705414804632],
    [106.36423277757078, 11.03262806414783],
    [106.36414822218603, 11.03255855185779],
    [106.36405928813706, 11.032505887709231],
    [106.36363477474836, 11.032324700089974],
    [106.36207702700257, 11.03169608096891],
    [106.3608393525764, 11.031191747316312],
    [106.35929537028773, 11.030564660974623],
    [106.35890160559495, 11.03045707471151],
    [106.35855508634509, 11.030417503217217],
    [106.3582473364257, 11.030406464559046],
    [106.35796289891063, 11.030426979920799],
    [106.35771581713716, 11.030480147189891],
    [106.3574686068749, 11.030616599336962],
    [106.3568306448739, 11.031054887890713],
    [106.35673543851503, 11.031129308444722],
    [106.35643670023904, 11.031364553623836],
    [106.35590328804614, 11.031826272966583],
    [106.35544646317733, 11.03221634485538],
    [106.35544646317733, 11.03221634485538],
    [106.35513358463506, 11.03248496058918],
    [106.35483114389439, 11.03274362620877],
    [106.35465799608075, 11.032892134934764],
    [106.3531074576696, 11.03417246790048],
    [106.35208277054204, 11.035050109510335],
    [106.34986375392917, 11.037053542162047],
    [106.349147569286, 11.037706981621525],
    [106.34715867444639, 11.039587986278718],
    [106.34598833042011, 11.040663462317161],
    [106.34455820724597, 11.04197796764868],
    [106.34332932238395, 11.043110290583167],
    [106.34223645494549, 11.044097326970848],
    [106.34193202406608, 11.044369468825247],
    [106.34149093596305, 11.044761258800484],
    [106.34080093016718, 11.045357183136606],
    [106.33942791429911, 11.046564496784717],
    [106.33847681221077, 11.047441961478482],
    [106.33735292630197, 11.048410247298023],
    [106.33627819527538, 11.049367615348991],
    [106.33500763155325, 11.050484316410579],
    [106.3313059554263, 11.05377548751951],
    [106.33094781143042, 11.054084333830984],
    [106.32981953970233, 11.055057618529704],
    [106.32932255763257, 11.055446853753807],
    [106.32814107120518, 11.056232156947038],
    [106.32804107785988, 11.056312424784867],
    [106.32688534420863, 11.057093602068397],
    [106.32565029672739, 11.057870858255251],
    [106.32539302427206, 11.057998196249534],
    [106.32497282098402, 11.058207363424538],
    [106.32460401742921, 11.058372161864153],
    [106.32392736167785, 11.058616753100704],
    [106.32109476324999, 11.059614095617116],
    [106.31874117363024, 11.060456856153383],
    [106.31390347472875, 11.06221703041142],
    [106.31263222875921, 11.062697175406752],
    [106.30715519988415, 11.064764845938917],
    [106.3036255466616, 11.066040052113351],
    [106.28941154920632, 11.07120669637518],
    [106.28664461855809, 11.072203785145769],
    [106.28623710755141, 11.072355905127274],
    [106.28404137218004, 11.073135628513116],
    [106.28359708188258, 11.073296005476752],
    [106.28332493019188, 11.073393617824864],
    [106.28312040517488, 11.073468453313922],
    [106.2827823101865, 11.073591697352503],
    [106.2824667279297, 11.07370289235621],
    [106.28217390296916, 11.073806763751783],
    [106.28075079670005, 11.074293366104593],
    [106.28048046345424, 11.074399479898414],
    [106.27842317089858, 11.075142151779682],
    [106.27802743636327, 11.075280171030116],
    [106.27729644863004, 11.075572809693265],
    [106.2771565333253, 11.07564414754377],
    [106.27658349009425, 11.075938137832484],
    [106.27626832692766, 11.07613898542732],
    [106.27585641905932, 11.076405928024847],
    [106.27571814212486, 11.076494189406397],
    [106.27562520358036, 11.076561838060039],
    [106.27549312207455, 11.076655479800365],
    [106.27527599726048, 11.076810913661816],
    [106.27500634196068, 11.077002762431272],
    [106.27486036914853, 11.077107058458667],
    [106.27476760507284, 11.077166111988094],
    [106.27467587353016, 11.077223099925863],
    [106.27464596689876, 11.077243499762668],
    [106.27457971644452, 11.077286160564315],
    [106.27441991013747, 11.077386469054927],
    [106.27437109393453, 11.077417002988907],
    [106.27369394273104, 11.07784783507595],
    [106.27253549869005, 11.078629139940789],
    [106.27241490736024, 11.078713925846197],
    [106.272190664702, 11.078870995787737],
    [106.27198749565056, 11.079011807003761],
    [106.2717622783344, 11.079164150813583],
    [106.2716468059962, 11.079242688953846],
    [106.27151114418847, 11.079334056616199],
    [106.27105174575412, 11.079647070490305],
    [106.27057987789928, 11.079964759392743],
    [106.27035913892759, 11.080114040898197],
    [106.27025770828571, 11.080181798589344],
    [106.27008496273355, 11.080299286578876],
    [106.26994508640325, 11.0803944432468],
    [106.26981958628578, 11.0804798841342],
    [106.26967092816875, 11.08058091952734],
    [106.26956026339265, 11.080658738726118],
    [106.26950648509886, 11.080696905713442],
    [106.26939345874503, 11.080776508785624],
    [106.26930625297673, 11.080837553624459],
    [106.26923021235267, 11.08088861839046],
    [106.269126703036, 11.080958396124657],
    [106.26901958359883, 11.081032426063423],
    [106.26893375290783, 11.081090729351843],
    [106.26885623706579, 11.081145215936555],
    [106.26879025472559, 11.081188515650227],
    [106.26867703914047, 11.0812646139838],
    [106.26801052517303, 11.081718613744675],
    [106.26792569851675, 11.081779759196058],
    [106.26782913898961, 11.081843458336932],
    [106.26772511654093, 11.081918378068425],
    [106.26764079322591, 11.081977712834417],
    [106.2675681053593, 11.082029040619277],
    [106.26743713023853, 11.08212306370732],
    [106.26739948518212, 11.082151037637646],
    [106.26722996286091, 11.082255546969424],
    [106.2670995816126, 11.082336228713292],
    [106.26694566856612, 11.082428194850264],
    [106.2669050575244, 11.082454132541073],
    [106.26670130908003, 11.082556798312613],
    [106.26666128996139, 11.0825770574837],
    [106.26658766332447, 11.082607064432493],
    [106.26651859645003, 11.082637334603072],
    [106.26641693836442, 11.082681348490057],
    [106.2662287228361, 11.082771436911601],
    [106.26611214899, 11.082826099146796],
    [106.26605877303162, 11.082847551471563],
    [106.26604617033286, 11.082861958872455],
    [106.26602940652651, 11.082872750837378],
    [106.26600285266086, 11.082881173832812],
    [106.26598984394352, 11.082884727282657],
    [106.26595443878506, 11.08288564854882],
    [106.26592775080843, 11.082881042223011],
    [106.26590400294484, 11.082870814150446],
    [106.2658836181553, 11.082857653221224],
    [106.26586618379672, 11.082839096303445],
    [106.26585009054517, 11.082818170407373],
    [106.2658388252691, 11.082791585333906],
    [106.26583413140075, 11.082753155395114],
    [106.26579765182179, 11.082738981639562],
    [106.26575218837694, 11.082712396543856],
    [106.26566093048245, 11.082617892556556],
    [106.2656023239593, 11.08257492897604],
    [106.26550777608647, 11.082534656484302],
    [106.2653316971642, 11.082475543533997],
    [106.26479393642278, 11.082306144636368],
    [106.26465472977591, 11.082253369199144],
    [106.26452544730192, 11.08220704262803],
    [106.26437327854187, 11.08214271786705],
    [106.26419530353206, 11.082070977835153],
    [106.26407485056798, 11.082020661641575],
    [106.263862483682, 11.081954982680143],
    [106.26368423408253, 11.08189946030009],
    [106.26345731919378, 11.081828127820131],
    [106.26328930766756, 11.081775742538866],
    [106.26321701802644, 11.081752257810754],
    [106.26302356014314, 11.081692922932909],
    [106.26297849902994, 11.081677787795394],
    [106.26248323643657, 11.081536836648588],
    [106.26211978219945, 11.08142624011707],
    [106.261978493065, 11.08138389817809],
    [106.26181448415645, 11.08133340860576],
    [106.26166485004882, 11.081288331925933],
    [106.2615230179156, 11.081244641356694],
    [106.26142645839113, 11.081215555511958],
    [106.26134932365476, 11.081190672327336],
    [106.26118490337991, 11.081141399914161],
    [106.26101051945174, 11.081087039223817],
    [106.26088332391876, 11.081049623915899],
    [106.26069686519396, 11.080990778435103],
    [106.2605142673328, 11.0809347180956],
    [106.26048261726851, 11.080925110557917],
    [106.26030000275864, 11.080874663673935],
    [106.26018742304151, 11.080843556555898],
    [106.26010865370064, 11.080821650749604],
    [106.26000284055779, 11.080794012588617],
    [106.25989847308584, 11.080764533241434],
    [106.25975249663296, 11.0807236553691],
    [106.2596062519003, 11.080682902595845],
    [106.2594423144454, 11.08063827846124],
    [106.25930337273824, 11.080599982648119],
    [106.25917328559981, 11.080563921416802],
    [106.25903293198932, 11.080526168705314],
    [106.25891211802359, 11.08049129634455],
    [106.25867166890733, 11.080433121333815],
    [106.25852777939114, 11.080399429125512],
    [106.25842746476734, 11.080375081195623],
    [106.25827711401485, 11.080338937667607],
    [106.25813240611463, 11.080304426002314],
    [106.2580127795906, 11.080275734929693],
    [106.2579226970019, 11.080252301359568],
    [106.2578076198121, 11.080225222614475],
    [106.25757153263415, 11.080156499573825],
    [106.25741187538802, 11.080109013550965],
    [106.25727380878473, 11.080068555843596],
    [106.25704979156188, 11.080002086532339],
    [106.25685785357467, 11.079946599788531],
    [106.2566747609179, 11.079892918283747],
    [106.25652811719476, 11.07984818909247],
    [106.25640805476289, 11.079811150326718],
    [106.2562038337276, 11.07974760978611],
    [106.25605779748707, 11.079702776985428],
    [106.2558234998043, 11.079630930018766],
    [106.25564584893382, 11.079578362472903],
    [106.25549793673342, 11.079533999982354],
    [106.25534691236915, 11.079488054080366],
    [106.25518989500264, 11.079441105606096],
    [106.25501135746809, 11.079386954987472],
    [106.25465258535623, 11.07927757813351],
    [106.25426507221943, 11.079162352149021],
    [106.2541849872771, 11.079137792111222],
    [106.25391998936712, 11.079093123287523],
    [106.25363233097315, 11.079043428957128],
    [106.25353754218143, 11.079026514381365],
    [106.25285454718131, 11.078975179824926],
    [106.25260475556121, 11.078992850747547],
    [106.25206872584883, 11.07903390700041],
    [106.25173590318322, 11.079101171971644],
    [106.25149118625036, 11.079150559382569],
    [106.25134065952507, 11.079181122267816],
    [106.251137854695, 11.07922259646223],
    [106.25097419399567, 11.079254716790388],
    [106.25068350916261, 11.079313372559238],
    [106.25046854195675, 11.0793567737452],
    [106.25016054380137, 11.079417218234378],
    [106.24991555954813, 11.079466989204398],
    [106.24967693942848, 11.079515794567254],
    [106.24933260036411, 11.079584801008366],
    [106.2490297899422, 11.079646586188643],
    [106.24874554111908, 11.079704005645024],
    [106.24845157774115, 11.07976296522163],
    [106.24801279241159, 11.079852192638066],
    [106.2479596846713, 11.079862853105361],
    [106.24769913994176, 11.07991570316491],
    [106.24744499003823, 11.079967970879514],
    [106.24716594067755, 11.080025826884595],
    [106.24660932688066, 11.080140734682653],
    [106.2463168246, 11.080201094906597],
    [106.24591066836945, 11.080285696654046],
    [106.24553363173085, 11.080363672485943],
    [106.24502798087008, 11.080469311605095],
    [106.2447475898944, 11.080526668542216],
    [106.24428169939593, 11.080623837457814],
    [106.24398795946192, 11.080685216419045],
    [106.24344218951117, 11.080798068726924],
    [106.24309070721921, 11.080870266910651],
    [106.24261256277386, 11.080969573675082],
    [106.24237238434192, 11.081019123798441],
    [106.2420213847593, 11.081092690350859],
    [106.24152204211202, 11.081195252379281],
    [106.24114584544661, 11.081273848855217],
    [106.240826497644, 11.081340290146525],
    [106.24059373756472, 11.081387375292843],
    [106.24015288761917, 11.081480925068474],
    [106.23979194522826, 11.081558545616879],
    [106.2392944156614, 11.081657143399198],
    [106.23893945925172, 11.081729572901905],
    [106.23861376792782, 11.08179460999425],
    [106.23826378211199, 11.081865470717519],
    [106.23790459571056, 11.08193713053411],
    [106.23774306214375, 11.081968712615788],
    [106.23744225313261, 11.082028128156127],
    [106.23718993252477, 11.08207823398231],
    [106.23682919900313, 11.082148691754186],
    [106.23622987976849, 11.082269369283518],
    [106.23573639195008, 11.082371784141378],
    [106.23508180779815, 11.082505927766368],
    [106.23475000076317, 11.082574839440626],
    [106.23434204947921, 11.08265615592531],
    [106.23385420495772, 11.08275514574126],
    [106.23342234720718, 11.0828467583235],
    [106.23306891651403, 11.082920905717197],
    [106.2326271351461, 11.083013280790794],
    [106.23210652375631, 11.083120793053327],
    [106.23171122378918, 11.083199313471667],
    [106.23132965497568, 11.083269911223265],
    [106.23085074091358, 11.08336852362952],
    [106.23040471333123, 11.08346271625123],
    [106.22996739848162, 11.083549837327123],
    [106.22950632504728, 11.083634046723585],
    [106.22927902780368, 11.083675152950255],
    [106.22865127131003, 11.083764409433869],
    [106.22834641882059, 11.083805553010388],
    [106.22806832254062, 11.083835649871997],
    [106.22762337939773, 11.083881409613104],
    [106.22724471659002, 11.083915107934407],
    [106.22687558681415, 11.083944028309718],
    [106.22652808429653, 11.083969274923577],
    [106.22559989874578, 11.084038010518219],
    [106.22454396992593, 11.084113966969296],
    [106.22406952368635, 11.084146812077545],
    [106.22361419782024, 11.08417873419015],
    [106.22315995367352, 11.084209374604802],
    [106.22250357063696, 11.084253691795778],
    [106.22205348494086, 11.084281926549194],
    [106.22164531679506, 11.084309546274657],
    [106.22101684312447, 11.084350655964707],
    [106.22063834989845, 11.084376870908654],
    [106.2202353794525, 11.084404457165888],
    [106.21979702809384, 11.084432905070997],
    [106.21884651029268, 11.084498595584344],
    [106.21815477604395, 11.084547109881141],
    [106.21764522406194, 11.084585127600073],
    [106.21714384299946, 11.084622283932854],
    [106.21654954122408, 11.084662931925152],
    [106.21607814461942, 11.084697055819964],
    [106.21543770257571, 11.084743662469757],
    [106.21488068213645, 11.084781614960969],
    [106.21440391229959, 11.084816576956495],
    [106.21398439529354, 11.084847351378182],
    [106.213639446696, 11.084871009032517],
    [106.21342869241484, 11.084885825855247],
    [106.2130737972284, 11.084910266597527],
    [106.21270689916345, 11.08493518024629],
    [106.21232177381172, 11.084963458348186],
    [106.21185052748706, 11.084999341298357],
    [106.21128048480223, 11.085041634578106],
    [106.21072709817365, 11.085076540260767],
    [106.21027420196909, 11.085105481941111],
    [106.20976003670793, 11.085139348338178],
    [106.20927596718393, 11.085171046098386],
    [106.2089436708068, 11.085191948751016],
    [106.20843792536495, 11.08522415899185],
    [106.2079444224352, 11.08525649085282],
    [106.20779241949595, 11.085265541304418],
    [106.20731293762013, 11.085263662637965],
    [106.20708641700367, 11.08526055667593],
    [106.20663873771359, 11.085225098648564],
    [106.20639984092611, 11.085205356535264],
    [106.20601324455637, 11.085134356443305],
    [106.205442175348, 11.085027276118382],
    [106.2052178477187, 11.084983266080542],
    [106.20478174076156, 11.084900576503076],
    [106.2044746119319, 11.084838199772834],
    [106.20416140080944, 11.084772228353609],
    [106.20403757666334, 11.084751632695243],
    [106.20352501098698, 11.08464457225414],
    [106.20329681302788, 11.084592496829167],
    [106.20289768326306, 11.084509089248465],
    [106.20236626684674, 11.084404764770513],
    [106.2018637864005, 11.08430505335043],
    [106.20123852923469, 11.084177063953856],
    [106.20079656212222, 11.084084611033854],
    [106.20019221680151, 11.083962573518386],
    [106.19977583035624, 11.083880263894562],
    [106.19902553690987, 11.083726416421957],
    [106.19836133395627, 11.083586747769782],
    [106.19788954988381, 11.083489744946263],
    [106.1971959195808, 11.083349163015408],
    [106.1963898130167, 11.08318442180434],
    [106.19589333962863, 11.083081710009909],
    [106.19535668063412, 11.082970372627793],
    [106.19467896955716, 11.08283050232092],
    [106.19405004023396, 11.08269933635696],
    [106.19363679962325, 11.08261381403951],
    [106.19300324489609, 11.082478413586138],
    [106.19196338398858, 11.082265415577684],
    [106.19143238095567, 11.08215256172351],
    [106.19090650297889, 11.082039685088725],
    [106.19057009108917, 11.081972478703234],
    [106.18986513596302, 11.081832467479227],
    [106.18915484474628, 11.081685700122176],
    [106.1889496803289, 11.081644125034332],
    [106.18857329148123, 11.081571879444184],
    [106.18830881879585, 11.08151792823247],
    [106.18796723829107, 11.08143776641384],
    [106.18780180524926, 11.081394317069305],
    [106.18746603855818, 11.081288480027139],
    [106.18736677850433, 11.08125182301825],
    [106.18689323372642, 11.081085015459786],
    [106.18663928700245, 11.080993758559206],
    [106.18626704689885, 11.08086110720158],
    [106.1858441258356, 11.080713586457039],
    [106.18538285496687, 11.080548348522003],
    [106.18484530411808, 11.08035474546418],
    [106.18430376760391, 11.080159999576217],
    [106.1838096942122, 11.079981554520002],
    [106.18323517301857, 11.079771974400211],
    [106.18268050022459, 11.079573564207871],
    [106.18226585868044, 11.0794249756275],
    [106.18174292641902, 11.079237183158446],
    [106.18109850589892, 11.079003366186457],
    [106.18055629914869, 11.07881004684583],
    [106.17985444042112, 11.07855782316206],
    [106.17924330802914, 11.078338469960723],
    [106.17885972650703, 11.07820015100694],
    [106.1783211048416, 11.078008859128818],
    [106.17785173589245, 11.077842971705829],
    [106.17745978392558, 11.077703999501953],
    [106.1769473572247, 11.077523223810251],
    [106.17636488983467, 11.077316645417083],
    [106.1758596272502, 11.077189157183332],
    [106.17576405155465, 11.077181355630422],
    [106.17565896308584, 11.077164697546154],
    [106.17530588999772, 11.07708337840829],
    [106.17477482403231, 11.076880219288636],
    [106.17451686151522, 11.076780872657759],
    [106.17440650494105, 11.076724590731299],
    [106.17435272665236, 11.07668129035204],
    [106.17431718738294, 11.076620880398048],
    [106.17427043025263, 11.076573983815175],
    [106.17419264130173, 11.076545271163749],
    [106.1740129545199, 11.076493805970175],
    [106.17381356955046, 11.076437746557408],
    [106.17380565600942, 11.076434967393665],
    [106.17374396521234, 11.07640838172014],
    [106.17334911874201, 11.0762887673944],
    [106.17327623141227, 11.07626345389849],
    [106.17312477242787, 11.07621170297564],
    [106.17297135007954, 11.076156030959279],
    [106.17271567250211, 11.07605988716264],
    [106.17269542182355, 11.07605317492827],
]

export default coordinates