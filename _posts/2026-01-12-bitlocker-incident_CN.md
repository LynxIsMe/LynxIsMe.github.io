## 目录

- [摘要（Abstract）](#abstract)
- [📝 Windows 启动失败事故记录（BitLocker / NTFS / BCD）](#-windows-启动失败事故记录bitlocker--ntfs--bcd)

  - [一、事件概述（Summary）](#一事件概述summary)
  - [二、初始症状（Observed Symptoms）](#二初始症状observed-symptoms)

  - [三、诊断过程（Investigation）](#三诊断过程investigation)
    - [1. BitLocker 层验证](#1-bitlocker-层验证)
    - [2. 分区与文件系统检查（DiskPart）](#2-分区与文件系统检查diskpart)
    - [3. EFI / 启动器检查](#3-efi--启动器检查)
    - [4. BCD（启动配置）验证](#4-bcd启动配置验证)

  - [四、根本原因分析（Root Cause）](#四根本原因分析root-cause)
    - [🔴 根本原因](#-根本原因)
    - [🔐 BitLocker 的影响](#-bitlocker-的影响)

  - [五、排除项（What Was NOT Broken）](#五排除项what-was-not-broken)
  - [六、结论（Conclusion）](#六结论conclusion)
  - [七、最终处理方案（Resolution）](#七最终处理方案resolution)
  - [八、经验与教训（Lessons Learned）](#八经验与教训lessons-learned)
  - [九、附注（Personal Note）](#九附注personal-note)

- [🛡️ 附加章节：如何设计备份策略以避免类似事故](#-附加章节如何设计备份策略以避免类似事故)

  - [一、明确这次事故暴露的核心风险](#一明确这次事故暴露的核心风险)

  - [二、备份策略设计的三个原则（Engineering Principles）](#二备份策略设计的三个原则engineering-principles)
    - [原则 1：备份必须脱离主系统文件系统](#原则-1备份必须脱离主系统文件系统)
    - [原则 2：至少一份备份必须是非实时挂载](#原则-2至少一份备份必须是非实时挂载)
    - [原则 3：数据与系统必须逻辑解耦](#原则-3数据与系统必须逻辑解耦)

  - [三、推荐的低成本但高鲁棒性方案](#三推荐的低成本但高鲁棒性方案)
    - [最小可行方案（学生 / 个人用户）](#最小可行方案学生--个人用户)
    - [工程师级个人方案（强烈推荐）](#工程师级个人方案强烈推荐)

  - [四、一句这次事故换来的设计经验](#四一句这次事故换来的设计经验)